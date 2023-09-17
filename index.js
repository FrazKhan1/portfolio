const portfolioContainers = document.querySelectorAll(".project");
const contactFormContainer = document.querySelector(".contact-form");
const buttonSubmit = document.querySelector(".send-message-button");

const formName = document.getElementById("form-name");
const errorName = document.getElementById("error-name");
const formEmail = document.getElementById("form-email");
const errorEmail = document.getElementById("error-email");
const formMessage = document.getElementById("form-message");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.querySelector(".error-icon");

const verifyName = function () {
  if (formName.value === "") {
    errorName.textContent = "Please don't leave blank";
    errorName.classList.add("error");

    return false;
  } else {
    errorName.textContent = "";
    errorName.classList.remove("error");
  }
  return true;
};

const verifyEmail = function () {
  let email = formEmail.value;
  if (email === "") {
    errorEmail.textContent = "Sorry, invalid format here";
    errorEmail.classList.add("error");

    return false;
  } else {
    errorEmail.textContent = "";

    errorEmail.classList.remove("error");
  }
  return true;
};

const verifyMessage = function () {
  if (formMessage.value === "") {
    errorMessage.textContent = "Please don't leave blank";
    errorMessage.classList.add("error");

    return false;
  } else {
    errorMessage.textContent = "";
    errorMessage.classList.remove("error");
    buttonSubmit.disabled = false;
  }
  return true;
};

formName.addEventListener("change", function (e) {
  verifyName();
});
formEmail.addEventListener("change", function (e) {
  verifyEmail();
});
formMessage.addEventListener("change", function (e) {
  verifyMessage();
});

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  verifyName();
  verifyEmail();
  verifyMessage();

  if (verifyName() && verifyEmail() && verifyMessage() === true) {
    formName.value = "";
    formEmail.value = "";
    formMessage.value = "";
    alert("Thank you, your message has been sent!");
  }
});

portfolioContainers.forEach((container) => {
  const projectLinks = container.querySelector(".project-links");
  const imgContainer = container.querySelector(".img-container");

  //EventListener for when mouse enters the ".project" class element in html-desktop only
  container.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 1440) {
      projectLinks.classList.remove("project-links-hide");
      imgContainer.style.opacity = "0.25";
    }
  });

  //EventListener for when mouse leaves the ".project" class element in html-desktop only
  container.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 1440) {
      projectLinks.classList.add("project-links-hide");
      imgContainer.style.opacity = "1";
    }
  });
});
