document.addEventListener("DOMContentLoaded", () => {
    // 1. See the timer increment every second once the page has loaded
    const counter = document.getElementById("counter");
    let counterValue = 0;
    const interval = setInterval(() => {
      counter.innerText = counterValue;
      counterValue++;
    }, 1000);
  
    // 2. Manually increment and decrement the counter using the plus and minus buttons
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    plus.addEventListener("click", () => {
      counterValue++;
      counter.innerText = counterValue;
    });
    minus.addEventListener("click", () => {
      counterValue--;
      counter.innerText = counterValue;
    });
  
    // 3. The Like button. Should see the count of the number of "likes" associated with that number displayed
    const heart = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    heart.addEventListener("click", () => {
      const existingLike = document.querySelector(`[data-num="${counterValue}"]`);
      if (existingLike) {
        const countSpan = existingLike.querySelector("span");
        const count = parseInt(countSpan.innerText);
        countSpan.innerText = count + 1;
      } else {
        const newLike = document.createElement("li");
        newLike.setAttribute("data-num", counterValue);
        newLike.innerHTML = `${counterValue} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    // 4. Pause button should be able to pause the counter, disable all buttons except pause button, and switch the
    // label on the button from pause to resume. 
    const pause = document.getElementById("pause");
    let playing = true;
    pause.addEventListener("click", () => {
      if (playing) {
        clearInterval(interval);
        pause.innerText = "resume";
      } 
      else {
        interval = setInterval(() => {
          counter.innerText = counterValue;
          counterValue++;
        }, 1000);
        pause.innerText = "pause";
      }
      playing = !playing;
      plus.disabled = !playing;
      minus.disabled = !playing;
      heart.disabled = !playing;
      document.getElementById("submit").disabled = !playing;
    });
  
    // 5. Click the restart button to restart the counter and re-enable the buttons
    const restart = document.getElementById("restart");
    restart.addEventListener("click", () => {
      counterValue = 0;
      counter.innerText = counterValue;
      interval = setInterval(() => {
        counter.innerText = counterValue;
        counterValue++;
      }, 1000);
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      document.getElementById("submit").disabled = false;
    });
  
    // Leave comments on the gamplay.
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const comment = commentInput.value;
      const newComment = document.createElement("p");
      newComment.innerText = comment;
      commentList.appendChild(newComment);
      commentInput.value = "";
    });
  });
  