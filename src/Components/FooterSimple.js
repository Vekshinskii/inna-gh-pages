import React from 'react';
import styled from "styled-components";

const FooterSimpleWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 3vh 30vh;
#create{
font-size: 1.5vh;
}
p{
font-size: 17px;
}
@media screen and (max-width: 1200px){
padding: 3vh;
p{
font-size: 13px;
}
}
`
const FooterSimple = () => {
    return (
        <FooterSimpleWrapper>
            <p>Все представленные фото и видео материалы принадлежат фотографу Инне Гусинской.
                Копирование и любое использование без согласия автора в
                коммерческих и некоммерческих целях, без разрешения автора, запрещена и преследуется законом!  </p>
            <p id="create">Created by Olga Vekshinskii</p>
        </FooterSimpleWrapper>
    );
};

export default FooterSimple;