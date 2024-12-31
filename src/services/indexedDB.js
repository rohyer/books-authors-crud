/**
 * Inicializa o banco de dados IndexedDB "LibraryDB",
 * criando os object stores e os índices para armazenar
 * dados de autores e livros.
 *
 * @returns {Promise<IDBDatabase>} A promise que resolve a instância do IndexedDB.
 * @throws {Error} Caso ocorra um erro ao inicializar o IndexedDB.
 */

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

/**
 * Adiciona um novo autor ao IndexedDB, verificando
 * se o e-mail já está cadastrado.
 *
 * @param {Object} author - O autor a ser adicionado.
 * @param {string} author.name - O nome do autor.
 * @param {string} author.email - O e-mail do autor.
 * @returns {Promise<Object>} - A promise com a adição do autor.
 * @throws {Error} - Se o e-mail do autor já estiver cadastrado ou ocorrer um erro ao adicioná-lo.
 */
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

/**
 * Retorna todos os autores do IndexedDB.
 *
 * @returns {Promise<Array>} - A promise com a lista de todos os autores.
 * @throws {Error} - Se ocorrer um erro ao buscar os autores
 */
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

/**
 * Deleta um autor do IndexedDB pelo ID.
 * Também deleta os livros associados a esse autor.
 *
 * @param {number} id - O ID do autor que será deletado.
 * @returns {Promise<String>} - A promise que resolve com uma mensagem de sucesso.
 * @throws {Error} - Se ocorrer um erro ao deletar um autor ou seus livros.
 */
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

/**
 * Adiciona um novo livro ao IndexedDB.
 *
 * @param {Object} book - O livro a ser adicionado.
 * @param {string} book.name - O nome do livro.
 * @param {string} book.author_id - O ID do autor do livro.
 * @param {number} book.pages - O número de páginas do livro.
 * @returns {Promise<Object>} - A promise resolvida com o livro adicionado.
 * @throws {Error} - Se ocorrer um erro ao adicionar o livro.
 */
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

/**
 * Retorna todos os livros do IndexedDB.
 *
 * @returns {Promise<Array>} - A promise resolvida com a lista de todos os autores.
 * @throws {Error} - Se ocorrer um erro ao buscar os livros
 */
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

/**
 * Deleta um livro do IndexedDB pelo ID.
 *
 * @param {number} id - O ID do livro que será deletado.
 * @returns {Promise<string>} - A promise resolvida com uma mensagem de sucesso.
 * @throws {Error} - Se ocorrer um erro ao deletar um livro.
 */
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

/**
 * Deleta todos os livros associados a um autor específico,
 * baseado no ID do autor.
 *
 * @param {number} id - O ID do autor que terão os livros deletados.
 * @returns {Promise<string>} - A promise resolvida com uma mensagem de sucesso.
 * @throws {Error} - Se ocorrer um erro ao deletar os livros do autor.
 */
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
