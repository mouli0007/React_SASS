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


// If Check Mixin


@mixin basetext-style(
  $color: tomato,
  $backgroundColor: transparent,
  $property,
  $value
) {
  //   If statement !

  @if $backgroundColor !=transparent {
    background-color: $backgroundColor;
  }

  @if $color !=tomato {
    color: $color;
  }

  @if ($property !=null) {
    #{$property}: $value;
  }

  font-size: $red;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

// Calling the function ! with @includes

@include basetext-style(blueviolet, #fff, border, 0.2rem solid #333);
