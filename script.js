// Simple interactivity for Busan Life site

document.addEventListener('DOMContentLoaded', () => {
  // Toggle membership form visibility
  const joinBtn = document.getElementById('join-btn');
  const membershipFormSection = document.getElementById('membership-form-section');
  if (joinBtn && membershipFormSection) {
    membershipFormSection.style.display = 'none';
    joinBtn.addEventListener('click', () => {
      membershipFormSection.style.display = 'block';
      membershipFormSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Handle membership form submission
  const membershipForm = document.getElementById('membership-form');
  if (membershipForm) {
    membershipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Gather user input (for demonstration purposes only)
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const plan = document.getElementById('plan').value;
      // Show a confirmation message instead of processing payment
      alert(`감사합니다, ${name}님! ${plan} 멤버십 가입 신청이 접수되었습니다.\n결제 진행을 위해 추가 안내를 드리겠습니다.`);
      // Reset form
      membershipForm.reset();
    });
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('message').value;
      alert(`${name}님, 문의해 주셔서 감사합니다!\n빠른 시일 내에 ${email}로 답변 드리겠습니다.`);
      contactForm.reset();
    });
  }
});