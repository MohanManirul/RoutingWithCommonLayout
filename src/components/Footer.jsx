import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright - {new Date().getFullYear()}. All Rights Reserved
                    </div>
                    <div className="credits">  
                        Designed by <a href="#">Manirul</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;