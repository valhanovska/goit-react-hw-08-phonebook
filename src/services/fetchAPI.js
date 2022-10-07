// import { axios } from 'axios';

// axios.defaults.baseURL = 'https://633da28e7e19b178291320e2.mockapi.io/';

// export const addContactAPI = data => {
//   return axios.post('/contacts', data).then(respons => {
//     return {
//       id: respons.data.name,
//       ...data,
//     };
//   });
// };

// export const deleteContactAPI = ({ data, id }) => {
//   return axios.delete(`/contacts/${id}`, data).then(respons => {
//     return {
//       id: respons.data.name,
//       ...data,
//     };
//   });
// };

// export const fetchContactsAPI = async () => {
//   try {
//     const response = await axios.get('/contacts.json');
//     const { contacts } = response.data;
//     const contactsArr = Object.entries(contacts).map(([id, data]) => {
//       return { id, ...data };
//     });
//     return { contacts: contactsArr };
//   } catch (error) {
//     console.log(error);
//   }
// };

// // fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// // addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// // deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".
