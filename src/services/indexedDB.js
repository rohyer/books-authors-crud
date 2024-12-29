export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("LibraryDB", 1);

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
    };

    request.onerror = (event) => {
      reject(`Erro ao abrir o banco de dados ${event.target.error}`);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

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
        console.error(`Erro ao realizar transação: ${error}`);
        reject("Erro ao realizar transação");
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
