import store from "./store";

export async function Showplanet(){
    console.log("dsadasd");
  const url1 = "../data/kepler-22b.json";
  const url2 = "../data/kepler-62f.json";
  const url3 = "../data/kepler-69c.json";
  fetch(url1)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      console.log(res);

      store.setState({
        items: newList
      });
  })
  fetch(url2)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      console.log(res);

      store.setState({
        items: newList
      });
  })
  fetch(url3)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      console.log(res);

      store.setState({
        items: newList
      });
  })
}