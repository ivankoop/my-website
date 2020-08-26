import firebase from '../../lib/firebase';

export default function experiences(req, res) {
  firebase
    .collection('work-experience')
    .orderBy("order", "desc")
    .get()
    .then((snapshot) => {
      const experiences = [];
      snapshot.forEach((doc) => {
        experiences.push(doc.data());
      });
      res.json({ experiences });
    })
    .catch((error) => {
      console.info(error);
      res.json({ error });
    });
};
