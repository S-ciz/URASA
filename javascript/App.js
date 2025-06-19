  // Import the functions you need from the SDKs you need



//Features
const health = "";
const Features = [
  {
    id: 0,
    title: "Job Searching",
    text: "We offer job training and workshops to equip refugees with vocational skills and job search techniques, including resume writing and interview preparation. Forming partnerships with local businesses can create job opportunities and promote the hiring of refugees, supplemented by cultural sensitivity training for employers. Facilitating internships and apprenticeships provides refugees with valuable work experience, and partnerships with trade schools and businesses can offer hands-on training. Establishing a job placement service to match refugees with suitable employment opportunities, assisted by volunteers who help with job applications and referrals, can be highly effective. Supporting refugee entrepreneurs with training, micro-loans, and business mentorship can also help them start and run small businesses, fostering economic self-sufficiency ",
  },
  {
    id: 1,
    title: "Healthcare",
    text: " Enhance healthcare access for refugees by forming partnerships with local clinics and hospitals to offer free or low-cost medical services, negotiating special rates, or arranging pro bono care. Mobile health units staffed by volunteer healthcare professionals can provide essential medical services directly within refugee communities. Health education and preventive care are also vital; organizations can conduct workshops on hygiene, nutrition, and preventive measures, and distribute multilingual educational materials. Addressing mental health is crucial, so providing access to counselors and establishing support groups for trauma counseling and mental well-being can be highly beneficial. Additionally, telemedicine services can be implemented to offer medical consultations remotely, leveraging technology to connect refugees with healthcare providers.",
  },
  {
    id: 2,
    title: "Education",
    text: "In the realm of education, we offer free language courses to help refugees learn the local language, utilizing volunteer teachers or partnering with local educational institutions. Tutoring and mentoring programs can provide after-school support for children and adult education classes, and mentorship programs can pair refugees with local volunteers for guidance and support. Providing access to computers and the internet for online learning, along with curating free educational resources, can help refugees continue their education. Distributing school supplies and uniforms, as well as establishing scholarship funds to assist with school fees and other educational expenses, are practical ways to support refugee students. Collaborating with local schools to integrate refugee children and advocating for refugee-friendly policies in the education system can further enhance educational opportunities. ",
  },
];

const body = document.querySelector('body');

function toggleFeature(e) {
  let id = e.target.getAttribute("myId");
  if (id) {
    const textElement = e.target.previousElementSibling;
    const Modal = document.querySelector("aside.Modal");
    Modal.style.display = "grid";
    const modalText = Modal.querySelector("p");
    modalText.textContent = Features[parseInt(id)].text;
    body.style.overflow = 'hidden';

  }


}

document.addEventListener("DOMContentLoaded", () => {
  const Modal = document.querySelector("aside.Modal");
  const removeModal = Modal.querySelector(".cancel");

  removeModal.addEventListener("click", () => {
    Modal.style.display = "none";
      body.style.overflow = 'scroll'
  });

  const featurebtns = document.querySelectorAll("#btn_feature");
  featurebtns.forEach((btn) => {
     btn.addEventListener("click", toggleFeature);
  });
  const ModalMain = Modal.querySelector("main");

  Modal.addEventListener("click", (e) => {
    if (!ModalMain.contains(e.target)) {
      Modal.style.display = "none";
        body.style.overflow = 'scroll'
    }
  });


});


