const initialState = {
  alfa: [],
  posts: [
    {
      id: "1",
      title: "Default: dispatch as a Prop",
      body:
        "If you don't specify the second argument to connect(), your component will receive dispatch by default,Once you have connected your component in this way, your component receives props.dispatch. You may use it to dispatch actions to the store."
    },
    {
      id: "2",
      title: "Providing A mapDispatchToProps Parameter",
      body:
        "Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly. There are a few reasons why you might want to do that."
    },
    {
      id: "3",
      title: "Defining mapDispatchToProps As A Function",
      body:
        "Defining mapDispatchToProps as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions. You gain access to dispatch and ownProps. You may use this chance to write customized functions to be called by your connected components."
    }
  ]
};

const RootReducer = (state = initialState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPost
    };
  }
  return state;
};

export default RootReducer;
