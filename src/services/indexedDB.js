export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("LibraryDB", 2);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains("authors")) {
        const authorsStore = db.createObjectStore("authors", {
          keyPath: "id",
          autoIncrement: true
        });

        authorsStore.createIndex("name", "name");
        authorsStore.createIndex("email", "email", { unique: true });
      }

      if (!db.objectStoreNames.contains("books")) {
        const booksStore = db.createObjectStore("books", {
          keyPath: "id",
          autoIncrement: true
        });

        booksStore.createIndex("name", "name");
        booksStore.createIndex("author_id", "author_id");
        booksStore.createIndex("pages", "pages");
      }
    };

    request.onerror = (event) => {
      reject(`Erro ao abrir o banco de dados ${event.target.error}`);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

// Authors functions
export const addAuthor = async (author) => {
  const db = await initDB();
  const transaction = db.transaction("authors", "readwrite");
  const store = transaction.objectStore("authors");

  const index = store.index("email");
  const request = index.get(author.email);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const authorExists = event.target.result;

      if (authorExists) {
        reject(`E-mail ${author.email} já está cadastrado`);
        return;
      }

      const addTransaction = db.transaction("authors", "readwrite");
      const addStore = transaction.objectStore("authors");
      const request = addStore.add(author);

      addTransaction.oncomplete = () => {
        const id = request.result;
        resolve({ id, ...author });
      };

      addTransaction.onerror = (error) => {
        console.error(`Erro ao cadatrar autor: ${error}`);
        reject("Erro ao cadastrar autor");
      };
    };
  });
};

export const getAllAuthors = async () => {
  const db = await initDB();
  const transaction = db.transaction("authors", "readonly");
  const store = transaction.objectStore("authors");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result || []);
    };

    request.onerror = (event) => {
      reject(`Erro ao buscar autores: ${event.target.result}`);
    };
  });
};

export const deleteAuthor = async (id) => {
  const db = await initDB();
  const transaction = db.transaction("authors", "readwrite");
  const store = transaction.objectStore("authors");

  return new Promise((resolve, reject) => {
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve(`Autor com ID ${id} deletado com sucesso!`);
    };

    request.onerror = (event) => {
      reject(`Erro ao deletar autor com ID ${id}: ${event.target.error}`);
    };
  });
};

// Books functions
export const addBook = async (book) => {
  const db = await initDB();
  const transaction = db.transaction(["books", "authors"], "readwrite");
  const booksStore = transaction.objectStore("books");

  return new Promise((resolve, reject) => {
    const bookRequest = booksStore.add(book);

    bookRequest.onsuccess = () => {
      const id = bookRequest.result;
      resolve({ id, ...book });
    };

    bookRequest.onerror = (error) => {
      console.error(`Erro ao cadastrar o livro: ${error}`);
      reject("Erro ao cadastrar o livro!");
    };
  });
};

export const getAllBooks = async () => {
  const db = await initDB();
  const transaction = db.transaction("books", "readonly");
  const store = transaction.objectStore("books");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result || []);
    };

    request.onerror = (event) => {
      reject(`Erro ao buscar livros: ${event.target.result}`);
    };
  });
};

export const deleteBook = async (id) => {
  const db = await initDB();
  const transaction = db.transaction("books", "readwrite");
  const store = transaction.objectStore("books");

  return new Promise((resolve, reject) => {
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve(`Livro com ID ${id} deletado com sucesso!`);
    };

    request.onerror = (event) => {
      reject(`Erro ao deletar livro com ID ${id}: ${event.target.error}`);
    };
  });
};

export const deleteBookByAuthor = async (id) => {
  const db = await initDB();
  const transaction = db.transaction("books", "readwrite");
  const store = transaction.objectStore("books");

  return new Promise((resolve, reject) => {
    const request = store.openCursor();

    request.onsuccess = (event) => {
      const cursor = event.target.result;

      if (cursor) {
        const book = cursor.value;

        if (Number(book.author) === id) {
          cursor.delete();
        }
        cursor.continue();
      } else {
        resolve("Livros pertencentes ao autor deletados com sucesso!");
      }
    };

    request.onerror = (event) => {
      reject(`Erro ao deletar livros com ID ${id}: ${event.target.error}`);
    };
  });
};
