import styled from 'styled-components';
import Header from './Header.header'
import Colors from './Colors/Colors';
import { GrShieldSecurity } from 'react-icons/gr';
import { BsBox } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { useRef } from 'react';
import { IoLogoLinkedin } from 'react-icons/io5';
import emailJs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BRUNO_LINKEDIN = 'https://www.linkedin.com/in/godinhobruno/';
const RAFAEL_LINKEDIN = 'https://www.linkedin.com/in/rafael-carvalho0/';
const GABRIEL_LINKEDIN = 'https://www.linkedin.com/in/gblaender/';
const DANIELLE_LINKEDIN = 'https://www.linkedin.com/in/danielledacruzmatos/';

export default function LandingPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const [sendingEmail, setSendingEmail] = useState(false);
    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
         const templateParams = {
            from_name: data.name,
            message: data.comment,
            email: data.email,
            from_company: data.company,

         }
         setSendingEmail(true);
         emailJs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_EMAIL_SERVICE_TEMPLATE_ID, 
            templateParams, import.meta.env.VITE_EMAIL_SERVICE_API_KEY).then((result) => {
            console.log(result.text);
            formRef?.current?.reset();
            setSendingEmail(false);
            toast.success('Email sent successfully!',{
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
               
            });
        }, (error) => {
            toast.error('Error when sending email!',{
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
               
            });
            setSendingEmail(false);
        });
    }
    return (
        <PageContainer>
            <Header />
            <PageContent>
                <Briefing>
                    <BriefingLeft>
                        <h1>You make it.
                            We provide the tools.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi dicta, illum fugit sapiente nobis minus quam deserunt. Iusto, reiciendis. At reprehenderit perferendis veniam, distinctio libero cumque? Minima, iste et?</p>
                        <button onClick={() => {
                            formRef?.current?.scrollIntoView({ behavior: "smooth" });
                            nameRef?.current?.focus();
                        }}>Get in touch</button>
                    </BriefingLeft>
                    <BriefingRight>
                        <img src="/connect-illustration.svg" alt="" />
                    </BriefingRight>

                </Briefing>
                <RoundedBriefingFooter>
                    <img src="https://static.wixstatic.com/media/c837a6_f3dbcb551a5c4e9a831a89a0d362afcc~mv2.png/v1/fill/w_1089,h_717,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f3dbcb551a5c4e9a831a89a0d362afcc~mv2.png" alt="" />
                    <Items>
                        <Item>
                            <GrShieldSecurity />
                            <p>Security for something</p>
                        </Item>

                        <Item>
                            <BsBox />
                            <p>Benefits for something</p>
                        </Item>
                        <Item>
                            <GoVerified />
                            <p>Accountability for something</p>
                        </Item>
                    </Items>
                </RoundedBriefingFooter>
                <ProblemContainer>
                    <img src="/problem-illustration-2.svg" alt="" />
                    <ProblemExplanation>
                        <div className='box'></div>
                        <div className='box2'></div>
                        <h1>Com a comunidade certa ao seu redor, <strong> grandes coisas acontecem</strong></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo id odit dolores at consectetur! Velit, ducimus distinctio, doloribus maiores hic reiciendis totam iusto nisi minus, optio placeat. Maiores, dignissimos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ab distinctio tempora suscipit earum facilis error saepe tempore quae voluptate. Nisi nesciunt delectus cupiditate animi! Consequuntur enim amet nisi. Magnam.
                        </p>
                    </ProblemExplanation>
                </ProblemContainer>
                <SolutionContainer>
                    <h1>Why choose <strong>CLARIT <span style={{color:Colors.mainGreen}}>?</span></strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum enim laborum assumenda ut itaque quo. Ratione aut necessitatibus nihil eveniet cum asperiores, accusamus, dignissimos ipsum repellendus molestiae quasi omnis reiciendis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis tempore, labore deleniti corporis eaque vitae assumenda sed laborum id, laudantium ex fugiat repudiandae? Fugit quae quaerat ipsa incidunt omnis. Non!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt sunt. Voluptatum odio eum aut saepe voluptatibus vel aspernatur laudantium, sequi quae, pariatur corporis impedit in expedita officiis laborum voluptates.
                    </p>
                </SolutionContainer>
                <BenefitsContainer>
                    <BenefitItemContainer>
                        <BenefitItemImageContainer>
                            <img src="/analysis.svg" alt="" />
                        </BenefitItemImageContainer>
                        <h1>Compliance</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi perferendis odio beatae nobis asperiores rem, magnam illum harum enim dignissimos excepturi architecto consequuntur dicta aspernatur, facilis, animi quia ratione!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi accusamus quod quo aliquid, id beatae soluta nisi expedita totam? Corporis veritatis cupiditate accusantium! Ipsam esse doloremque totam iure quasi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci. Animi, vitae consequatur unde amet vero asperiores voluptatum, ex cum blanditiis officiis velit aliquam ratione illo iste consequuntur est commodi?
                        </p>
                    </BenefitItemContainer>
                    <BenefitItemContainer>
                        <BenefitItemImageContainer>
                            <img src="/overview.svg" alt="" />
                        </BenefitItemImageContainer>
                        <h1>Overview your money</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi perferendis odio beatae nobis asperiores rem, magnam illum harum enim dignissimos excepturi architecto consequuntur dicta aspernatur, facilis, animi quia ratione!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi accusamus quod quo aliquid, id beatae soluta nisi expedita totam? Corporis veritatis cupiditate accusantium! Ipsam esse doloremque totam iure quasi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci. Animi, vitae consequatur unde amet vero asperiores voluptatum, ex cum blanditiis officiis velit aliquam ratione illo iste consequuntur est commodi?
                        </p>
                    </BenefitItemContainer>
                    <BenefitItemContainer>
                        <BenefitItemImageContainer>
                            <img src="/inside-transfers.svg" alt="" />
                        </BenefitItemImageContainer>
                        <h1>Transfer from to something</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi perferendis odio beatae nobis asperiores rem, magnam illum harum enim dignissimos excepturi architecto consequuntur dicta aspernatur, facilis, animi quia ratione!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi accusamus quod quo aliquid, id beatae soluta nisi expedita totam? Corporis veritatis cupiditate accusantium! Ipsam esse doloremque totam iure quasi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci. Animi, vitae consequatur unde amet vero asperiores voluptatum, ex cum blanditiis officiis velit aliquam ratione illo iste consequuntur est commodi?
                        </p>
                    </BenefitItemContainer>
                    <BenefitItemContainer>
                        <BenefitItemImageContainer>
                            <img className='drex' src="/DREX.png" alt="" />
                        </BenefitItemImageContainer>
                        <h1>DREX</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi perferendis odio beatae nobis asperiores rem, magnam illum harum enim dignissimos excepturi architecto consequuntur dicta aspernatur, facilis, animi quia ratione!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi accusamus quod quo aliquid, id beatae soluta nisi expedita totam? Corporis veritatis cupiditate accusantium! Ipsam esse doloremque totam iure quasi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci. Animi, vitae consequatur unde amet vero asperiores voluptatum, ex cum blanditiis officiis velit aliquam ratione illo iste consequuntur est commodi?
                        </p>
                    </BenefitItemContainer>
                </BenefitsContainer>

                <ForProjects style={{ marginTop: '150px' }}>
                    {/* <img className='curve-gray-up' src="/vector.svg" alt="" /> */}
                    <ForCompaniesExplanation>
                        <h1>For projects</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo id odit dolores at consectetur! Velit, ducimus distinctio, doloribus maiores hic reiciendis totam iusto nisi minus, optio placeat. Maiores, dignissimos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ab distinctio tempora suscipit earum facilis error saepe tempore quae voluptate. Nisi nesciunt delectus cupiditate animi! Consequuntur enim amet nisi. Magnam.
                        </p>
                    </ForCompaniesExplanation>
                    <img src="/projects.svg" alt="" />
                </ForProjects>
                <ForFunds>
                    <img src="/funds.svg" alt="" />
                    <ForCompaniesExplanation>
                        <h1>For funds</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo id odit dolores at consectetur! Velit, ducimus distinctio, doloribus maiores hic reiciendis totam iusto nisi minus, optio placeat. Maiores, dignissimos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ab distinctio tempora suscipit earum facilis error saepe tempore quae voluptate. Nisi nesciunt delectus cupiditate animi! Consequuntur enim amet nisi. Magnam.
                        </p>
                    </ForCompaniesExplanation>
                </ForFunds>
                <ForProjects style={{background:`linear-gradient(180deg,  white 0%, rgba(255, 255, 255, 0) 100%),${Colors.mainGrayLowOpacity}`}}>

                    <ForCompaniesExplanation>
                        <h1>For suppliers</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo id odit dolores at consectetur! Velit, ducimus distinctio, doloribus maiores hic reiciendis totam iusto nisi minus, optio placeat. Maiores, dignissimos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ab distinctio tempora suscipit earum facilis error saepe tempore quae voluptate. Nisi nesciunt delectus cupiditate animi! Consequuntur enim amet nisi. Magnam.
                        </p>
                    </ForCompaniesExplanation>
                    <img src="/workers.svg" alt="" />
                </ForProjects>
                <ParnersContainer>
                    <h1 className='title'>Partners</h1>
                    <PartnersList>
                        <Partner>
                            <img src="https://lh3.googleusercontent.com/f0vaw3cX0ZW4YE99j2UMnFKDS7Hq0_eeJb_xHxbIVFV8pO-gO7JUMlWz5PwcgyZuT1_nR0aKauPjQqvWXuK6tdBR4gd_3JPNWWs=s0" alt="" />
                            <h1>Bruno Godinho</h1>
                            <h2>CEO</h2>
                            <p>With a career spanning over 13 years in the financial market and stints at renowned companies such as SulAmérica, Banco Original, and CSU Digital, taking on leadership roles in strategic areas of digital products and operations.</p>
                            <ul>
                                <li>Graduated in Engineering from the University of São Paulo (USP).</li>
                                <li>Post-graduated in Economics from the Getúlio Vargas Foundation (FGV).</li>
                                <li>Led the establishment of 2 Financial Institutions.</li>
                                <li>Head of digital products for 4 years in the financial and insurance sectors.</li>
                            </ul>
                            <a target='_blank' href={BRUNO_LINKEDIN}><IoLogoLinkedin/>LinkedIn</a>
                        </Partner>
                        <Partner>
                            <img src="https://lh3.googleusercontent.com/CtJGy3hvZEXfIhgZTrbqu7EReJ6htq0v25QbVgZTeCdPZdfsSgruzjdhejtcyo4yXoSRr01y_qzt2yE4Pzg-H6J7zfTMOK3zDA7M=s0" alt="" />
                            <h1>RAFAEL CARVALHO</h1>
                            <h2>Blockchain Development</h2>
                            <p>Web3 developer with expertise on Blockchain networks, Ethereum, BSC, BSV, Polygon, Harmony-One, Hedera, Solana.</p>
                            <ul>
                                <li>Certified Finance and Blockchain Professional - Blockchain Council </li>
                                <li>Certified Ethereum Expert - Blockchain Council</li>
                                <li>Certified Bitcoin Professional  CryptoCurrencyCertification Consortium</li>
                                <li>Audit Certified Professional for Public Companies and Financial Institutions (CNAI/CVM/BACEN) - Conselho Federal de Contabilidade - Brazil</li>
                                <li>Certified on IFRS e ISA - ACCA</li>
                            </ul>
                            <a target='_blank' href={RAFAEL_LINKEDIN}><IoLogoLinkedin/>LinkedIn</a>
                        </Partner>
                        <Partner>
                            <img src="https://lh3.googleusercontent.com/c39Lkh_okKMvwkbqWp7hbROmnYvE0zPFR8jExRrU11r6bRlhwz8AiPX71F5Qu2bmKohFjRxH5iSD9ypRMNdi-PtWp-KeULmm7n8=w418" alt="" />
                            <h1>GABRIEL LAENDER</h1>
                            <h2>Product Design | Compliance</h2>
                            <p>Product Designer with international expertise on crypto projects and compliance.</p>
                            <ul>
                                <li>Product-Owner at several companies in Bay Area</li>
                                <li>Founder of two blockchain startups</li>
                                <li>Pós-doc in Blockchain at USC (Los Angeles)</li>
                                <li>UX Designer by University of California</li>
                                <li>Certified Product-Owner by Scrum Alliance - CSPO</li>
                                <li>Certified Corporate Compliance and Ethics Professional - CCEP-I</li>
                                <li>Ph.D. Law and Technology by Universidade de Brasília</li>
                            </ul>
                            <a target='_blank' href={GABRIEL_LINKEDIN}><IoLogoLinkedin/>LinkedIn</a>
                        </Partner>
                        <Partner>
                            <img src="https://lh3.googleusercontent.com/oCqIsXyR3wnRh03pIpuFrI863zHltiiEAippgeBZkab6iL6-Kv7roOCGBK3FJsn1okIAAbLLoRDifwCW_Oog6IJjeOyw2gDUmA=w418" alt="" />
                            <h1>DANIELLE MATOS</h1>
                            <h2>Legal Counsel</h2>
                            <p>With over 10 years of experience in corporate affairs management, her career is marked by significant contributions to some of Brazil's leading publicly listed companies.</p>
                            <ul>
                                <li>Certified ESG Compliance Professional by LEC</li>
                                <li>Led the legal team of a health tech spin-off of one of the largest health providers in the Americas</li>
                                <li>Seasoned legal experience at major projects in companies such as Bradesco, and Sulamerica</li>
                            </ul>
                            <a target='_blank' href={DANIELLE_LINKEDIN}><IoLogoLinkedin/>LinkedIn</a>
                        </Partner>
                    </PartnersList>
                </ParnersContainer>
                <ContactForm onSubmit={submitForm} ref={formRef}>
                    <img className='back' src="/form-back.svg" alt="" />
                        <img className="ilus" src="/email.svg" alt="" />
                    <Fields>
                        <SCLogo>
                            <img className="logo" src="clarit-logo-2.png" alt="" />
                            <h1>CLARIT</h1>
                        </SCLogo>
                        <input  disabled={sendingEmail} ref={nameRef} maxLength={200} id='name' name='name' required type="text" placeholder='Name' />
                        <input  disabled={sendingEmail} maxLength={200} required id='company' name='company' type="text" placeholder='Company' />
                        <input  disabled={sendingEmail} maxLength={200} id='email' name='email' required type="email" placeholder='Email' />
                        <textarea  disabled={sendingEmail} maxLength={2000} id='comment' name='comment' autoComplete='comment' required placeholder='Comment'></textarea>
                        <button disabled={sendingEmail}>Send</button>
                    </Fields>
                </ContactForm>
            </PageContent>
        </PageContainer>
    )
}

const Fields = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding-right: 70px;
    /* margin-right: 26%; */

    input{
        height: 40px;
        padding:5px;
        
    }
    textarea{
        padding:5px;
        height: 150px;
        resize: none;
    }
    input,textarea{
        border-radius: 5px;
        width: 100%;
        max-width: 400px;
        border: 0;
        &:focus{
            outline: none;
        }

        &:disabled{
            opacity: 0.5;
        }
    }
    

    button{
        width: 100%;
        max-width: 400px;
        border: 0;
        height: 40px;
        border-radius: 10px;
        color: white;
        background-color: ${Colors.darkGreen};
        &:hover{
            opacity: 0.8;
        }
        &:disabled{
            opacity: 0.2;
        }
    }
`;

const SCLogo = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    .logo{
        width: 80px;
        max-width: 400px;
    }
    h1{
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 700;
        font-size: 34.307px;
        line-height: normal;
        color: white;
        margin-left: 20px;
    }
`;

const ContactForm = styled.form`
    padding: 20px;
    width: 100%;

    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
.ilus{
    position: absolute;
    left: 20%;
    bottom: 1px;
    
    width: 35%;
}
.back{
    position: absolute;
    top: -45px;
    left: 0;
    width: 100%;
    height: 130%;
    object-fit: cover;
    object-position: 30% 0%;
    z-index: -1;
}
`;

const Partner = styled.li`
width: 300px;
background-color: white;
border: 1px solid ${Colors.mainGrayLowOpacity};
padding: 20px;
box-sizing: border-box;
display: flex;
align-items: center;
flex-direction: column;
height: 900px;
position: relative;

img{
    width: 100%;
    aspect-ratio: 1;
    max-width: 300px;
    max-height: 300px;
}

h1{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    white-space: nowrap;
    line-height: 26px;
    color: ${Colors.mainGreen};
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
}

h2{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19.2px;
    color: #000000;
    margin-top: 10px;
    text-align: center;
    margin-top: 20px;
}
p{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 14.75px;
    line-height: 19.2px;
    color: #000000;
    margin-top: 20px;
}
ul{
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* &::marker{
        left: 10px;
        position: absolute;
    } */
    li{
        white-space: pre-wrap;
        text-align: -webkit-match-parent;
        list-style: none;
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 14.75px;
        line-height: 19.2px;
        color: #000000;
        list-style: outside;
        margin-left: 14px;
    }
}

a{
    position: absolute;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    border: 1px solid transparent;
    /* background-color: ${Colors.mainGreen}; */
    background-color: #0a66c2;
    color: white;
    height: 40px;
    border-radius: 10px;
    gap: 10px;

    &:hover{
       text-decoration: underline;
       opacity: 0.8;
    }
}
`;

const PartnersList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;
padding-top: 40px;
flex-wrap: wrap;
`;

const ParnersContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 30px;
.title{
    width: 100%;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    width: 50%;
    text-align: center;
}
`;
const ForFunds = styled.div`
flex-wrap: wrap;
display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    padding: 20px;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;

    img{
        width: 391px;
    }
`;
const ForCompaniesExplanation = styled.div`
 width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1{
        color: black;
        width: 90%;
        text-align: left;
        font-family: Plus Jakarta Sans;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px;

        strong{
            font-weight: 700;
        }
    }

    p{
        color: black;
        width: 90%;
        font-family: Plus Jakarta Sans;
        font-size: 14.75px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.2px; /* 130.169% */
    }
`;
const ForProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    width: 100%;
    height: 400px;
    /* background-color: ${Colors.mainGrayLowOpacity}; */
    background: linear-gradient(180deg,  ${Colors.mainGrayLowOpacity} 0%, rgba(255, 255, 255, 0) 100%),#FFFFFF;
    padding: 20px;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
    
    .curve-gray-up{
        width: 100%;
        position: absolute;
        right: 0;
        top: -120%;
        z-index: -1;
    }

    img{
        width: 391px;
    }
`;
const BenefitItemImageContainer = styled.div`
width: 100%;
height: 220px;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 100%;
    max-height: 200px;
}
`;

const BenefitItemContainer = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 300px;
h1{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
}
p{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 14.75px;
    line-height: 19.2px;
    color: #000000;
    text-align: center;
}
`;


const BenefitsContainer = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 40px;
width: 100%;
padding-top: 40px;
`;


const SolutionContainer = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    height: 400px;
    width: 100%;
    /* background-color: ${Colors.mainGrayLowOpacity}; */
    background: linear-gradient(180deg,  #d8d8d8 0%, rgba(255, 255, 255, 0) 100%),#FFFFFF;
    gap: 20px;
    h1{
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 43px;
        line-height: 50px;
        color: #000000;

        strong {
            font-weight: 700;
        }
    }

    p{
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
        width: 50%;
        text-align: center;
    }
`;

const ProblemExplanation = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    
    h1{
        color: #FFF;
        width: 90%;
        text-align: left;
        font-family: Plus Jakarta Sans;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;

        strong{
            font-weight: 700;
        }
    }

    p{
        color: #FFF;
        width: 90%;
        font-family: Plus Jakarta Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px; /* 130.169% */
    }
`;

const ProblemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    background-color: ${Colors.mainGreen};
    padding: 20px;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
    position: relative;
    .box,.box2{
        background-color: white;
        position: absolute;
        left: 0;
        top:-50px;
       
        width: 20px;
        height: 250px;
        transform: rotateZ(45deg);
    }
    .box2{
        left: 50px;
    }
    img{
        width: 391px;
    }
`;

const Item = styled.li`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;

    p{
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: #000000;
    }
`;

const Items = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;
    position: absolute;
    top: 70px;
`;


const RoundedBriefingFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 300px;

    img{
        width: 1366px;
        opacity: 0.4;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        bottom :-100px;
    }
`;

const PageContent = styled.main`
    padding-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BriefingLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1{
        font-family: Plus Jakarta Sans;
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        width: 390px;
        line-height: 50px;
        color: #000000;
    }
    p{
        color: #000;
        font-family: Plus Jakarta Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 130.169% */
        width: 380px;
    }

    button{
        color: white;
        width: 118px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 5px;
        border: 1px solid transparent;
        background: ${Colors.mainGreen};
        font-family: Plus Jakarta Sans;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 22.4px; /* 140% */
    }

`;

const BriefingRight = styled.div`
    width: 50%;
    
    img{
        width: 100%;
    }
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    
`;

const Briefing = styled.div`
    margin-top: 140px;
    display: flex;
    width: 80%;
    justify-content: center;
    gap: 100px;
    position: relative;
`;
