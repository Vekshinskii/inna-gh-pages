import React, {useState} from 'react';
import styled from "styled-components";

const ContactWrapper = styled.div`
margin: 0;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
a{
color: #1B4A3E;
}
i {
font-size: 3vh;
padding: 0 2vh;
}
#check{
font-size: 1.7vh;
margin: 0;
}
@media screen and (max-width: 1200px){
text-align: left;
align-items: start;
h1{
 padding: 0 3vh;
}
}
`
const ContactsForm = styled.div`
width: 50vw;
padding: 2vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
    
form {
 border: 1px solid gainsboro;
 width: 30vw;
 padding: 3vh;
}    
    @media(max-width: 1200px) {
    flex-direction: column;
    width: 100%;
        form {
            width: 100%;
            padding: 2vh;          
        }
    }
`;
const ContactsTitleWrapper = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    h1 {
        padding: 3vh 3vh 1vh 3vh;
    }
`
const FormGroup = styled.div`
font-size: 2.3vh;
z-index: 2;
    input {
        margin: 0.5vw 0;
        border: none;
        border-bottom: 1px solid #1B4A3E;
        background-color: floralwhite;
    }
`
const Textarea = styled.textarea`
margin: 0.5vw 0;
`
const BtnPrimary = styled.input`
height: 6vh;
width: 10vh;
margin-top: 1vw;
background-color: #1B4A3E;
font-size: 3vh;
letter-spacing: 2px;
border-radius: 20px;
    &:hover {
        background-color: rgba(27, 74, 62, 0.7);
    }
@media(max-width: 1200px) {
margin-top: 6vh;
}
`
const AddressSection = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content:center;
text-align: left;
padding: 3vh 0 0 15vh;
p{
font-size: 2.3vh;
}
@media screen and (max-width: 1200px){
padding: 0 5vh;
}
`
const ContactSection = styled.div`
padding-top: 3vh;
display: flex;
align-items: start;
justify-content: space-around;

@media screen and (max-width: 1200px){
flex-direction: column;
}
`

const FormSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CheckBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2vh 3vh;
input{
margin: 0 1vh;
}
`
const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    return (
        <ContactWrapper id="contact" className="container-fluid">
                <ContactsTitleWrapper>
                <h1>Контакты</h1>
                </ContactsTitleWrapper>
            <ContactSection>
            <AddressSection className="col-11 col-md-10 col-lg-10 col-xl-6">
                <h2>Связаться со мной просто.</h2>
                <p>Чтобы связаться со мной, воспользуйтесь формой обратной связи.</p>
                <p>Или пишите мне в социальные сети.</p>
                    <p><i className="fab fa-facebook"/> Facebook:<a href="https://www.facebook.com/israelphoto.inna" target="_blank"
                                                                        rel="noopener noreferrer"> Inna Gusincki</a></p>
                    <p><i className="fab fa-instagram-square"/> Instagram:
                        <a href="https://www.instagram.com/inna_gusinski/?utm_medium=copy_link"
                           target="_blank" rel="noopener noreferrer" > inna_gusinski</a></p>
                    <p><i className="fa fa-envelope"/>0559844975inna@gmail.com</p>
                <p>тел: +(972)-55-984-49-75</p>
            </AddressSection>
                <FormSection>
            <ContactsForm className="col-10 col-md-10 col-lg-10 col-xl-6">
                <form  action="https://formsubmit.co/0559844975inna@gmail.com"
                      method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/thank-you"/>
                    <input type="hidden" name="_subject" value="INNAGUSINSKI message"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <fieldset>
                        <FormGroup>
                            <label>Ваше имя<span className="text-danger">*</span></label>
                            <input
                                id='name_input'
                                type="name"
                                name="name"
                                className="form-control"
                                minLength="2"
                                maxLength="15"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Name"/>
                        </FormGroup>
                        <FormGroup>
                            <label>Номер телефона<span className="text-danger">*</span></label>
                            <input
                                   className="form-control"
                                   id='phone_input'
                                   type="phone"
                                   value={phone}
                                   placeholder="Введите номер телефона"
                                   onChange={(e) => setPhone(e.target.value)}
                                   required/>
                        </FormGroup>
                        <FormGroup>
                            <label>Адрес электронной почты<span className="text-danger">*</span></label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </FormGroup>
                        <FormGroup>
                            <label>Сообщение</label>
                            <Textarea name="message" type="text" className="form-control" placeholder="Message"/>
                        </FormGroup>
                        <BtnPrimary type="submit" className="btn btn-primary w-100" value="Отправить"/>
                    </fieldset>
                </form>
            </ContactsForm>
                    <CheckBox>
                    <input type="checkbox"/>
                        <p id="check">Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных.</p>
                    </CheckBox>
                </FormSection>
            </ContactSection>
        </ContactWrapper>
    );
};
export default Contact;