// const topicList = document.querySelector('#topic-list');
// const { doc } = require("firebase/firestore/

import { db } from "@/Firebase"

// create element and render topic
// function renderTopic(doc) {
//     let li = document.createElement('li');
//     let title = document.createElement('span');
//     let author = document.createElement('span');
//     let day = document.createElement('span');
//     let description = document.createElement('span');
//     let video_url = document.createElement('span');
//     let status = document.createElement('span');


//     li.setAttribute('data-id', doc.id);
//     title.textContent = doc.data().title;
//     author.textContent = doc.data().author;
//     day.textContent = doc.data().day;
//     description.textContent = doc.data().description;
//     video_url.textContent = doc.data().video_url;
//     status.textContent = doc.data().status;

//     //    append list
//     li.appendChild(title);
//     li.appendChild(author);
//     li.appendChild(day);
//     li.appendChild(description);
//     li.appendChild(video_url);
//     li.appendChild(status);

//     topicList.appendChild(li);
// }
// Basically loop through all docs data and put it in topicList

const FetchTopicsFromStore = async () => {
    try {
        db.collection('Topics').get().then((snapshot) => {
            console.log(snapshot);
            snapshot.docs.array.forEach(doc => {
                console.log(doc.data())
            })
        })
    } catch (error) {
        console.log(error.message);
    }
};