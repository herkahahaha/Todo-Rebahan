# todo REBAHAN'S ft Redux

## Intro

- [live demo next level](https://rebahans.herkahahaha.now.sh/)

```
Kamu mesti familiar dan mengetahui
- Javascript ES6/7
- React Basic
- Redux Basix
```

> Membuat aplikasi sederhana dengan fitur component yang sedikit ditambah `Redux` sebagai file induk yang mendistribusikan data secara langsung tanpa harus memaksa `props` bekerja keras dan memusingkan developer, bisa dibilang ini framework bypass, namun tak semua developer menyukai ini, dan `redux` hanya opsional.

### Pengaturan Awal

> **Kerangka Kerja**

    .
    ├── node_modules
    ├── public
    ├── src
        ├── assets
            ├── Asset-16.png
        ├── components
            ├── pages
              ├── About.js
              ├── Contact.js
              ├── Home.js
            ├── Navbar.js
            ├── Post.js
        ├── store
            ├── action
              ├── DeleteAction.js
            ├── reducer
              ├── RootReducer.js
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── Logo.svg
      ├── materialize.css
      ├── serviceWorker.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.log

> **Setup Awal**

1. Menjadikan `App.js` sebagai kontainer menampung semua data komponen dengan bantuan `react-router-dom` menjadikan masing halaman dinamis.

```js
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
```

- inisialisasi di dalam `return`, tag `Switch` ini yang berfungsi mendinamiskan setiap perpindahan halaman.

```js
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* single page untuk detail post */}
          <Route path="/:posts__id" component={Post} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
```

2. Membuat komponen `Navbar` dan menambahkan tag `Link` dari `react-router-dom`.

```js
<nav className="nav-wrapper blue darken-3">
  <div className="container">
    <Link to="/" className="brand-logo left">
      Rebahan's
    </Link>
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about"> About </Link>
      </li>
      <li>
        <Link to="/contact"> Contact </Link>
      </li>
    </ul>
  </div>
</nav>
```

3. bermain dengan `Redux` pada `index.js`, dengan mengimport beberapa package

```js
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducer/RootReducer";
const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- `RootReducer.js` pada folder store/reducer

```js
const initialState = {
  alfa: [],
  posts: [
    // isi data state
    {},
    {},
    {}
  ]
};

const RootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default RootReducer;
```

- Menambahkan fungsi `mapStateToProps` dan HOC `connect()` dari package `react-redux` sebagai penghubung file ke `RootReducer`

`Home.js`

```js
...
const mapStateToProps = state => {
  return { posts: state.posts };
};

// parsing agar data terambil dan bisa ditampilkan
export default connect(
  mapStateToProps,
  null
)(Home);

```

- Fungsi yang sama pada `Post.js` dan menambahkan `mapDispatchToProps` sebagai fungsi yang melakukan action event yang diinginkan, dalam kasus kali ini hanya fitur menghapus.

```js
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.posts__id;
  console.log(id);
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
      // dispatch({ type: "DELETE_POST", id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
```

- inisialisai kedalam file komponen JSX pada `Post.js`

```js
const Post = props => {
  // fungsi Hapus
  let handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };
  const postDetail = props.post ? (
    <div className="post">
      <h3 className="center">{props.post.title}</h3>
      <p>{props.post.body}</p>
      <div className="center">
        {/* digunakan pada atribut button */}
        <button onClick={() => handleClick()} className="btn grey">
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading data....</div>
  );
  return <div className="container">{postDetail}</div>;
};
```

- import `{deletePost}` dari folder action, karena biasanya developer memisahkan fungsi hapus di folder `action` jika menggunakan `redux`.

```js
import { deletePost } from "../store/action/DeleteAction";
```
