import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident modi non nostrum similique quod veritatis enim molestiae quaerat? Blanditiis veniam vitae enim perspiciatis consequuntur obcaecati ullam et accusantium nisi! Perspiciatis hic voluptatibus quam vitae sint eum nemo ipsum dolorem, dolorum ad doloremque in molestias quos quibusdam? Enim quae sit quo?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;