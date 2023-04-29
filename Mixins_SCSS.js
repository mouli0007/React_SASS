@mixin buttonStyle() {
  display: block;
  color: blueviolet;
  font-weight: bold;
  background-color: #fff;
  border: none;
  padding: 1rem;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}

@mixin hover($bg-color, $color) {
  background-color: $bg-color;
  color: $color;
}


  button {
    @include buttonStyle();
  }

  button:hover {
    @include hover(red, green);
  }
