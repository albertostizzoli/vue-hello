const { createApp } = Vue

createApp({
    data() {
        return {
            text: 'Ciao Alberto!!!!',
            image: "img/colouredstars.jpg",
            textColor: "text-dark"
        }
    }
}).mount('#app');

