import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #a7a3a3;
    background-color: #2e2e2e;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.7);
    width: 20rem;
    height: 25rem;
    gap: 10px;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 80px;
    height: 10rem;
    background-size: cover;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center; 
`;

export const Description = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    color: #ffffff; 
    text-align: center; 
`;

export const Button = styled.button`
    background-color: #2e76c4;
    color: white;       
    font-weight: bold;
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1rem;   
    border-radius: 2px;
    width: 100%;
    height: 2.5rem;
    cursor: pointer;
        &:hover {
            background-color: #0567cf;
            color: #050505;
        }
`;