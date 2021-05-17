import styled from 'styled-components';

export const Container = styled.section`
    background-color: #F2F2F2;
    display: flex;
    padding: 120px 60px 120px 228px;

    .wrapper{
        display: flex;
        flex-direction: column;
        h2{
            font-weight: 500;
            font-size: 28px;
            line-height: 32px;
            color: #3D3D3D;
            padding-right: 160px;
        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: #4A4A4A;
            margin: 40px 0px;
            padding-right: 30px;
            a{
                line-height: 24px;
                color: #5e20a4;
                font-weight: 500;
            }
        }

        a{
            color: #5E20A4;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }
`;
