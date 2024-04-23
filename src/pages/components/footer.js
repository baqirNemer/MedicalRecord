
// eslint-disable-next-line
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ResponsiveFooter() {
  return (
    <footer className="bg-light text-muted pt-2" style={{ paddingBottom: '0' }}> {/* Adjusted paddingBottom */}
      <div className="container">
        {/* Social Links Section */}
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-facebook"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-twitter"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-google"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-instagram"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <div className="row pt-4">
          <div className="col-lg-6">
            <h6 className="fw-bold mb-4">MEDIRECORD</h6>
            <p>Our aim is to keep your health records safe and secure.</p>
            <p> we provide a platform for you to access your health records from anywhere in the world.</p>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold mb-4">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#">Diagnostics</a></li>
              <li><a href="#">Treatment</a></li>
              <li><a href="#">Surgery</a></li>
              <li><a href="#">Rehabilitation</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold mb-4">Useful Links</h6>
            <ul className="list-unstyled">
              <li><a href="#">Hospital1</a></li>
              <li><a href="#">Hospital2</a></li>
              <li><a href="#">Hospital3</a></li>
              <li><a href="#">Hospital4</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-bold mb-4">Contact</h6>
            <address>
              <i className="fas fa-home me-2"></i> Beirut, Lebanon<br />
              <i className="fas fa-envelope me-2"></i> MediRec@gmail.com<br />
              <i className="fas fa-phone me-2"></i> +961 71 849 637<br />
              <i className="fas fa-print me-2"></i> +961 71 220 571
            </address>
          </div>
        </div>
      </div>
      <div className="text-center py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className="mb-0">&copy; 2024 Copyright: <a href="" className="fw-bold">MediRec.com</a></p>
      </div>
    </footer>
  );
}

export default ResponsiveFooter;
