import React, { useState } from "react";
import { Card, CardWrapper, Container, CTop, CTopText, CTopTitle, Description, DisplayImage, DisplayImageOne, Logo, Wrapper } from "./Style";
import PFP from "./assets/pfp.jpg"
import DisplayImage_One from "./assets/displayimage_one.png"
import CardBottom from "./components/CardBottom";

function App() {
    const [currentColor, setCurrentColor] = useState(1);
    return (
        <Wrapper>
            <Container>
                <CardWrapper>
                    <Card>
                        <CTop currentColor={currentColor}>
                            <Logo src={PFP} alt="logo"></Logo>
                            <CTopText>
                                <CTopTitle>Parad1se's Portfolio</CTopTitle>
								<Description>A cool developer.</Description>
                            </CTopText>
							<DisplayImage>
								<DisplayImageOne src={DisplayImage_One} alt="Display-Image-One"></DisplayImageOne>
							</DisplayImage>
                        </CTop>

                        <CardBottom />
                    </Card>
                </CardWrapper>
            </Container>
        </Wrapper>
    );
}

export default App;
