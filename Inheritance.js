// Inheritance !

.div-container {
  border: 0.1rem solid black;
  border-radius: 50%;
  box-shadow: 0px 0px 0px black inset;
}

.section-container {
  @extend .div-container;
  background-color: bisque;
  text-shadow: 01rem 0.1rem black inset;
}
