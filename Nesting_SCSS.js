.main-div {
  display: grid;
  place-content: center;

  div {
    width: 90vw;
    padding: 1rem 3rem;

    text-align: center;
    h1 {
      font-family: Arial, Helvetica, sans-serif;
      color: cornflowerblue;

      &:hover {
        color: red;
      }
      span {
        box-shadow: 1px 1px 1px red;
      }
    }
  }
}
