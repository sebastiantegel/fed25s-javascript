import "./style.css";

const x = 100;

const p = new Promise((resolve: (value: boolean) => void, reject) => {
  setTimeout(() => {
    if (x >= 10) {
      resolve(true);
    } else {
      reject();
    }
  }, 4000);
});

p.then(
  (ok) => {
    console.log("Det fungerar:", ok);
  },
  () => {
    console.error("Det blev ett fel");
  }
);
