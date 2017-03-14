/**
 * Created by sophia on 3/10/17.
 */
document.addEventListener("DOMContentLoaded", function () {
  //gather all parent elements to input tags (aka checkboxes) => to be used to apply background color
  const divs = document.querySelectorAll('.answer');

  //gather all checkboxes to loop through later
  const checkboxes = document.querySelectorAll('input');

  //define a start variable to assign to the most recently checked box
  let startBox;

  function handleClick(e) {

    let betweenBoxes = false;
    if (this.checked && e.shiftKey) {
      //loop through each checkBox if shift key is held and a box is checked
      checkboxes.forEach(checkBox => {

        //if the checkBox is is current one or the last one selected (whichever comes first),
        if (checkBox === this || checkBox === startBox) {
          //change a variable to the opposite (aka true since it starts off as false on each click),
          betweenBoxes = !betweenBoxes;
        }
        //then mark that checkBox as being checked before continuing the loop
        if (betweenBoxes === true) {
          checkBox.checked = true;
          // checkBox.parentNode.style.backgroundColor = '#609c9f';
        }
      });
    }
    //end each click event by assigning it to the last checked box (to serve as starting variable in case shift key is held
    startBox = this;

    //applies darker background color if checked
    divs.forEach(answer => {
      if (answer.querySelector('input').checked) {
        answer.style.backgroundColor = '#609c9f';
      } else {
        answer.style.backgroundColor = '#80b0b3';
      }
    });
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', handleClick);
  });

});