import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styled from '@emotion/styled';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mbjeekjv');

    if (state.succeeded) {
        return <SuccessMessage>Thaks for your message!</SuccessMessage>;
    }

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
                <ContactH1>
                    Let's team Up and make something awesome!
                </ContactH1>
                <p className='text-white text-xl mb-10'>
                    No more waiting around! Let's join forces and bring your ideas to life. Get in touch with me today and let's kick-start your next project together.
                </p>
                <div className='flex justify-around'>
                <Link to="https://www.linkedin.com/in/adriel-alejandro-vazquez" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" className='main-color1'/>
                </Link>
                <Link to="https://github.com/adrielvazquez89x" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2xl" className='main-color1'/>
                </Link>

                </div>
            </div>
            <div>
                <FormContainer onSubmit={handleSubmit}>
                    <FormLabel htmlFor="email">Your E-mail</FormLabel>
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <FormLabel htmlFor="message">Message:</FormLabel>
                    <FormTextarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Mensaje"
                        field="message"
                        errors={state.errors}
                    />

                    <Button text="Send" type="submit" disabled={state.submitting} />

                </FormContainer>
            </div>
        </div>




    );
};

const ContactH1 = styled.h1`
        color: ${props => props.theme.mainColor2};
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 2px;
`

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
color: ${props => props.theme.mainColor1};
font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;



const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;

function App() {
    return <ContactForm />;
}

export default App;
