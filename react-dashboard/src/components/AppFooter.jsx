import React from "react";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <section className="footer-author">
          <p>
            Created by <strong>Shourya Pratap</strong>, {currentYear}
          </p>
        </section>

        <section className="footer-contact">
          <a href="mailto:07shourya.pratap@gmail.com">Contact Me</a>
        </section>
      </div>
    </footer>
  );
};

export default AppFooter;
