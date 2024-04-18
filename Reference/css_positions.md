Absolute (remove from normal flow)

body {
  overflow-x: hidden;
}

.container {
  position: relative;
}

.item-1 {
  position: absolute;
  top: -50px;
  right: -50px;
  /* bottom: 0px; */
  /* left: 0px; */
  z-index: -1;
}

---------------------------------
Fixed (similar to absolute but will scroll with the document)

.item-1 {
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-radius: 0;
  width: 100%;
  z-index: 1;     sets layer
  opacity:0.3     adjusts object brightness
}

----------------------------------
Sticky (only works with top property defined, then will scroll with page)
.item-5 {
  position: sticky;
  top: 50px;
}

-------------------------------
Relative (Keep in document flow)

.item-1 {
  position: relative;
  top: 100px;
  left: 100px;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
}

-------------------------------


.container{
  width: 500px;
  height: 500px;
  background-color: rebeccapurple;
  clip-path: path("M0.5 73.5V1H20V56H72V73.5H0.5Z");
  transition: all 2s ease;
}

.container:hover{
  clip-path: polygon(0% 50%, 11% 59%, 54% 76%, 81% 48%, 30% 18%);
}

.frame {
  width: 500px;
  height: 500px;
  border: 3px solid rebeccapurple;
  perspective: 200px;
}

.shape {
  width: 500px;
  height: 500px;
  background-color: lightblue;
  transform: rotateY(-30deg);
  transition: all 3s ease;
}

.player {
  width: 100%;
  background-color: black;
  aspect-ratio: 16/9;
}

img {
  filter: saturate(200%);
}

img:active {
  filter: none;
}

input {
  padding: 20px;
  border: 1px solid red;
  caret-color: red;
}

input:focus {
  outline: 1px solid red;
}

input::placeholder {
  color: red;
}

/* .item h1,
  .item h2,
  .item h4,
  .item p{
    color: blue;
  } */

.item :not(h3) {
  color: red;
}

.review:has(button) .content {
  filter: blur(10px);
}

video {
  width: 100%;
  aspect-ratio: 16/9;
}

::cue {
  font-size: 50px;
}

