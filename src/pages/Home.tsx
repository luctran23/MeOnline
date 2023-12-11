import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
    background: #f3eaea;
`;
const IntroductionWrapper = styled.div`
    height: 100vh;
    position: relative;
`;
const CenterPartWrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        height: 50vh;
    }
`;
const LeftPartWrapper = styled.div`
    width: 51%;
    margin-left: 100px;
    h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }
    p {
        font-size: 13px;
        margin-bottom: 8px;
    }
    @media (max-width: 768px) {
        width: 80%;
        margin-left: 0;
        h1 {
            font-size: 20px;
            margin-top: 10px;
        }
        p {
            font-size: 11px;
        }
    }
`;
const RightPartWrapper = styled.div`
    img {
        border-radius: 50%;
        object-fit: cover;
    }
`;

const MemoriesWrapper = styled.div`
    min-height: 100vh;
`;
const MemoryGrid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 15px;
    row-gap: 15px;
    padding: 15px;
    @media (max-width: 768px) {
        width: unset;
    }
`;

const ImageWrapper = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const memoryPhotos = [
    {
        id: "1",
        src: "https://lh3.googleusercontent.com/pw/ADCreHeN3llJA3JcJu7V7gTP-Se5aZP9Lo8CoWQLZb7_7FSkymM03PBqbK5Bb8DLTmaBtVOgTx3S2kKT14G1g8ATdizayx50GTP_RMnEnDW_j9mIljh96rsxswU2p4MILA55FpPWLcz4mSX6VFBvI3Qy3lOcRGCHopamgYHDCyeNUZ4hAbdKUHVRAlOP1BZ60Av2aJH-nZtKhSoEI3tjFdDe4eY3H0BsqJBq_n7DQRve-KZk8GvqFPL8anTJV99iVS2x271fK4GMI0MlKKGm_9_dKawll84V1pIMUsr1hIQx7_9wvREdZqAwi142W3Px-V5n1zvBTiIFG1NqDkN7TewpW2iV2qezawxr8N5A_yGdaV0lbK90RUKTDX0KgtRewx-THnDKYjHY3i-af1qsls1aop8trwY3luBMHjE0oTtdijq2aap-ipbRKwEqhSkw01jTIhuArR7i5g3MYDC2GAiWCwD9-z-w88fAkIZ9hgbWYYylmbTnDg5A9azvOCktbBZ4Lj4kKLOAS8yFQUm_rQiDC4hZlNOtPhP092pJtH4RJmYqzEHt3oOom0y3ohVVJqZgEHM4m3QVZL9xaAFPY7ONknUa8EKllnJWkmS4ZUJf1f-wiV9b41jRvCTt48mAl6qIs-nMNbSyEfmKlk_u8tEhfT2FwREnOEHdFBXuEAxCq93rW3Gxk2PSj3KrRgpTIwr0ajVZ9l6DZnSd4MTopP2CuOmzYXcKQqxwZEKX19bgRndI6mjZ4obnbRN4exyZN4MWKoXbwHqZJpJ6Klhec4i1i53aFHjET8BeKcKuFy5tYs24-ceWen6P5Ek1NJlDmLwnFK-SZa0AYl3CskBIvlAY0dB_ykn16iq2xHax2uM2-xIwfRZVzgKvpPqPnQk6X4bSUPoCmw=w541-h963-s-no-gm?authuser=0",
    },
    {
        id: "2",
        src: "https://lh3.googleusercontent.com/pw/ADCreHdfY02yrbDux95pLxVskDA0BqweSUD170zEat5uQEcugSMjfVLgEBW9nFFkHu8vgHz4h6_rZa9zvCOnH4WyqvQZ34CQW0N_D7_fD1otW28BwG2CYMw9DRpxAcbqoAefOgzSdb1rT30tU26ttOvx3rHz3D5UhtvUzl-2KM5-6VI3ERkjvxiyRsTHbz8T1pfSM5TH4-XHPPoujurOtrh1l89zrHQnW79-boQ-JsNwpg6Go5LNXQtMPtSsd4K03NzGQISfbKqORDVfH9LwU6XZk48tzp46sj4ej1w_vnySo2_aLa_Pbg21ittKbTrlsZVRswUALw2V9fIIocodZO7tlw5jazZuwAAsP_oNNJSspoPVv2SHG1JJm-unKgiz9hQqGStsJCEkhWbOWbJQuCzI-i1spQtU2ztU9YTDjHroDmTVGEYWjgjf_EbvzYlSvzXM3eogoVPaD-2sY0v5j3DSKGPQg18RJOatH71rqM1hIZKLz9af_ZMZDBX8GysfYVnR5Kj1ltb0TU6NKlpTabm-U1CoQgaqgF_slPYT-e0gZ0pG7rEqczqG_lNuVQ-XaeYBZ_HOhObmgu0tqm9bQzLy8eC7jABR_a1-Xr2_LSbA0zo3w-2n-tJey6s-89UAw8K3T2ZlVZHPVCWbG1FyaCEjhDq_T7z8cKDxT7doOEBbbU-ys97mxDNIPDzDHWSaVnOJNS08NYW4vXUGxkoN0YUqLFNAKJJAa57LSiDWOr9xY3NzB047JSRCWU87M5TH38tvQyfmOilmn6vHtfEKRO-bBPWFTNacbHhMShqweQYNZtQC07HqVhaH1CCV2udU9jQNtxVpvqJ4-O6WQeHx_M9Nyp2LdJpw6siLW9eLByAp5WDbvldW0zKz0NAmJHOnea83qeMtQA=w722-h963-s-no-gm?authuser=0",
    },
    {
        id: "3",
        src: "https://lh3.googleusercontent.com/pw/ADCreHdBVcB1PfxzDNm4H3Pm4iKigdOhjhBDX2Eh69Y271XUhm8WU13gKwh_puW6NZfUPk3V3Lan8FWLadkl-9LAzo-VBIbPxTDHE4vwOwhHLHVBKe-0SRi08jDMWJlfIvmTZClJv6UW-RUk-tZUOE5IKP4kYedRAOChf50b1iObIrKF4jevuVWM9Jl-jDjo37UvxB1LXMR23HF-8taNAAKlwStGgC9xEk4Rm5MYHuTA17lqLrQjZ8NsBlcG4Ch5JLJyYs4Q1h2LGbWoRpWU6-GAgjwtqVzxcOt4Djf8-kg-8sb3jID81VR5pOUxvGdhwU9igvbQwfAPtCcsjvdTDkezmuBUo7RdShtI1yst3h4e8sBBtSBOzPdThZWvX3QoQIOFbwjYpZYhi5cJ3bCulZEsAnG-0g4Yrzua4_9_jxdPrG1v26kTtYGgrK53k5iuzyoPgRTQCBM0RaOZJUAEU6U-uo9jkXzizlJdjYfmbCjKxUCBnlDBiXf7PLcK8LHoim7tCUdPGHdJHRikzcnJTkNboCHVSc2Bh3SKqS9bFTggtAfdeL6TGG0CWHmAA3UgNDvojBEdZ7qy8Mfr1fDDZEHlHJrbdBidnN0sUtodu84duoNDktDtAeKFB8cODPRugqo3eEFirk8geSJwV1hyB2Efm2UHXd8kqvzQjz7g0uMhecvd-YPz1BkPOxAZMdHHEM2-ski8-AcPKMprichtmjc3uosfdKENJ7omPuUENTIUTxqOmM2zGK2ataT_A27K_T6TdjLteN6o7o5spiOwOEKO5iQfNCVw0KitbtE662mkJmdbCE1V1fCDUPVhce_DYesXixJ5pimKAptH33Fgt4RJxS8Zs8VCkxYWPdtzEtBWWKvojCPLqupU34r4LxxCyVPhg5cRnQ=w722-h961-s-no-gm?authuser=0",
    },
    {
        id: "4",
        src: "https://lh3.googleusercontent.com/pw/ADCreHdeRWSlBAN_h9J6iItw6MI0u9ZbunqXVQ1m-SE8UUisLnZxVs1rodzSMLcgYHPbRFYwygZox790xXDXOnHZmH8nIHs3tKSjisrLbD8Z4nOj_Iw5ihO55UUsi8V2KCYAN639z1njfSriuBsRjTqawdj6jpAHbU0Nz7yadHX8L6eQjtKHaTVAjufhSU8HhcFG6vKv5VQz4rcyOy94N9MgJlPmYGt_PaUgkR_zO_r2cdVitqH_WqUMnoWrTc0kug9ki8FwWOK7vWwdnTgPS6tRPXGEIzdFRMtpdH1dO_zfF0H-cI7caxmuBzIdWME-ir_W1c3FBaIQ2JOlEfLXoDvSlwAXnDODLup8Qnyhz3YlIcNOYaIrGywswV9qzj-YCSw-IfmmjJUucaOr6c696M7bcNKKjQW77QKWVS6fzCK5By8HcnoOihTFxu_4DXe533M_gcjkcDB4myE2WtNHqyIt6A2kY60gUEBuXzytvbfWbPJDDCbItUFITTy8ScqF5uigm-HLFFHhyRatrbnzAiLC6PPzdtZnFAkeS5A-IyH6zGrNEFYz05VL86dzJGddSBXnyU8kZQuNwsg0fpU8g0GD3J4_jmIZwd19-GoY9Yo7dssn0F_wZmnRNAP0XXEYSJRWwPxR919mioFGGmnm3f9_Ku-6rbagAECGCqxQtqclfpJrit9iJ5_NWs3U6g2Rx4u5rojltSnxGrGTblZIw_9Gs4Ba4rsuznEIQ-qz62bvW_Bp_GYw69kQMcTfk34pJg0lEv3ZmS_FHwMwPRFCk1Qt7akF8IPJCT1N-lpRv0BbEI94v-kERQ3pM4BV2GxpUazNIpPZRaW1vKQ8NDbeALXdhngxw-WBWjnUdDj5khIKE120-hzPJQ2JsgcLBkeC7F7RISmaCg=w722-h961-s-no-gm?authuser=0",
    },
    {
        id: "5",
        src: "https://lh3.googleusercontent.com/pw/ADCreHfsr2PNyMNU1R0Tg-2o14CKjcFChLeCS7_6cB3d_x8VMiUW4RzPMDOPvGuvhZA956kZ1MkwevQ6DYmm9zV4XtbH1w7YNHFVTsSjGsVRw_JT2LDrQUGSbyaciaaOufLIC_qRFoAuYlonNSyceLqrAsmCi7kWEtrCYvu1HK6Zrnl1FFzXaJaQ6OHpBfGUIWDA3SWC-uk7iBJxqx6AepnCsMAkjMBb2SsMeyXEhSzOV9RNeoneikd_SYhiJq0gYzqk0NisXFmox0idVOZCuzj-czT9ByziXaTO98VpoajKGcaDLIBCv0JX_2991ndUyxtKsm_0oYRre5uK-Y6-bwN0qLech-rUd0Q6H74QPOxm0WfYO7gDcF0mI78hNXjsKl9PzDQOBKsOH2hCMCwXfni1c2dAPLyaEb4An0CNF0eLQIabU_-y0c8bWltlacFhNN3tplB1heLW6Kr3XY9papxGDlfAiLNyMpbYAh2RayDHRthA13ZD6FcE2km5QM-HsoW-cffGYGvSJUo7Wcz0UW8l2zLysCpIdx-oA3axoZv6sy1sR2rkTRaRO496bTUbH10HWQeLADqiQH96KZjOvGTKbNqqgD07Tl05bFoGZHTLHp4KKAoDomfHGZ-YOn8y--yZVBy-IE_TGbaq2XhPiMW0MGXyZycgcEnePX9ZPWRBuGbWykX6PT5u71Szr6_SKWVbGQ-wi0lZmMsUXcgkcaLFu6_dEbHF2-FeYJ9APmplOZ-9KJGLbDvh93EAdUNZaPKYhFeCbqLMqICYvvqdIL0s2nyLBkBMHwONjijyq-vvZv0MLxHI1xzW4Qagnkw7t6R4VCXcd-8zElWEjfGJYYLGUJpffcb8zPV92KsYTqiQYKEqMFcFcYgrnQqbNAAFMY8gB3_G5g=w722-h963-s-no-gm?authuser=0",
    },
    {
        id: "6",
        src: "https://lh3.googleusercontent.com/pw/ADCreHeEpWa48vhYR3EBaiRCGzP80a9bF6NnhrEVFnLtdmYSRcPyWIZWOI_PvPid9Kzjra0symJSZNX3XqhWV8U0M_yWF2My5lp7M6OPlVs2_0xLrFVFLYiDzqKdyaLQhuOkBsHZYT55CLNzcKhSc-2mjyn9UBmCGUgGR9Zc4BD6BITO5GHZd5daZ_tEVRNcDY8JbRGelhBNfeJRbGCp1wnOshzOL_pqOYpZHEIwCCLcY6sLAeuZ8G0KKVlQrSB3TvGhX1zrfyuzWZJFOKRgUoBs1YDlTTr2keLCNI478b2l0rrlB3OmP6b4D7cuck6xbxyaL_UbUQ-Uj4e7sKm25nKYG_2xeCTJ5gL1VLCuHn-SnM5KfvHulrIz7AAr_2DoQsutDUoexDqvXgIVFzfX-WVAeuFDszCx0yfvEWjn61aIGsaqYYn2u_7NCkXCHFtn82HPp2303uNk3teb0TlMtemM6WVUOoyrOGTU8nYBPBsWsi64K1VnwcSKq2gLRJT2QX_bJh-wyssihNFm0SNo1xiZO3t5MAQgSEkRNgCFUQeB6ibYboMN6VzEfyPQjzWXh3dvAqTjHOT_5KThs-eeFxc50O-gVmkS9nAKOfvt8Wayv42XbnYB2nQ12JshJtRlIGwJXn7Oez3GSHqy8TOyLufRL1xFB6R1VvNHIXwBf9Mq3lG3uXbRXMX0HXfwRB_8nH26MWaK7ZYUJDsx64Cdkuj94mETRdDc_N_OSxI03xuZrO0lsF0R2jO6h7Cr-xinYv-zXvU_c4qWPu_EX0_2gyJPso7okf91lN0yqCpMxVpz2mBWSv4lEp2rLeY5s7HChchWbX7k7GofqJT0Z4KsY2m9e16UrnwusIk7W2VnHHY2krkJyJEZPodeNZfT3v4AfN4lK-DrJQ=w722-h961-s-no-gm?authuser=0",
    },
    {
        id: "7",
        src: "https://lh3.googleusercontent.com/pw/ADCreHedx9cLtgBqvTmVH-r6Sw2YpbAXq-zoPVsbUAGMykxMH5oXsGjOqXfAxOCYpDGqPAXB_c5gUICLOiUxZjpDKU4xpranAQhK59sqdAdCy4X4Ip3PzVZD_Ca7RTbmInMXy5CW7Pz9CPMTlw97D5wr4aRrTRrZXBbNr8TO0_uvsQQ2fj3SJBXjQe91X9ssPcU13gFf4PXeri_wfLRsAq10hyB2GtwSGGVqxaeSv1xhy59VQFKKHzmqEbG5ybOi4T1JplDsfYbLSDeWKsBkNeNaDzEK3vgrvTX5TcCURNYLIElQ2wFVZbvX8XUP7HNi9u00M_yvanW-axTQS4_y0PXzXvyvxZ9K2ihDlkvMgYTJ102votad10p4U7IXKcwERmaUB9gcDBaWKXiOF8XANiT8GziOETPnbRyM1OUJbc7dTzVzVioeSntqMYnIfeupoNNfe3z_kGAdj7TSjhbVNnDx4TPW__v-OkMzMIUDsIJB0TZ7npgjuXjcibb1_Noydeg1PhT5JSWE2yaMqqpUpmgLModgZgcO_5ebIF9M-7sj6EbTRpnJg4GBmFAheOq9sii3ieNsZzjgqaerFkNYtvpc22bMRGgaV5S00yJuDhoxi2iEYlBOUMcYn07N30e81gRh0hHfVAleesegp_5cILf4QCzQZlxcpmUtHRdjnfyQv3rVKFislOZAFfBVlYgJCz_ncH9aQPjmrNCbZwSAst1t68wyUUejwLfWsIlUXmrXMfL2eGtHF5pUc-6cWU47AMhQbpQCpiILACjhlOHwul9nbpSzFq9_q2CDdaqZO6WhX8ZiS3H0WW42qUzCGTscyn4PSyERcpNtLgU2-E_dGZKs8DyQWeYX-I43kTmHzE61TnvgzAaKx0zZCXcQIU0Run499Om8_g=w958-h718-s-no-gm?authuser=0",
    },
    {
        id: "8",
        src: "https://lh3.googleusercontent.com/pw/ADCreHcF9NSfXSUIV_Qw2NVhsBAn8HFeMdjawbKih1ZZMdpGJfhleGDNvfhBy52VfBUqR02ARIJuR9VnFrXsGvlKVs4oSPMyuafGMskWumRugp0KP7TW3lPxfWqeZ9Igj_Lx_1SlChemEG9r4xhP53xvh_jpCBNLUIT6YQr2KS8b7B6KNHBe6FYvBARXXkqwnqFo1qLfj1O9NrtSz4gUrH5Ed-0LISrOYSdxbms6rVSL1yBiLe3zYVyu4CgsbHeEdO3WnUsmqLYQOzQO1tXmZIMmy5IXt09LHxRS5JKoWHl53y8RXU_9wtZpf88bkuejEzvos0RjAWKqxVlUf_S_j7dEN-LdrM9hKVHqIrYtDJiwcyyP6KHiuu1Uw8M5GbW4UMTE_WLTqaO76upu9638W5tN-c0mdYsAmfejgBKa6iYCx1dcYVz3IlG4kuFWMFXYSE8MrT7Um7XwCPy0sgpUVaZXtGivWQGKbBnWa29PWU-hf_Z9TMRoRVXjAfrwedfNpTE3s661noykDjWSD8vSyfcJ_DbTM9ptVywzHQGVH9poVRX7XigAFZQEc7tqnLcqlV1w3uUj66rn0kMhBnZJjLjiimkLbyn5v0pXQN2c9ict3o8zDIxlPfCesysnzMHLHYuxP39AHVHsW7BYRi61MoNXORLs7qUm6MYxer2Rk27pESrDaj-d67WxNTIXyD4cQBStNNyW810iugGw5OA5m10FsGH_ig5ZvDXp8nQP-rjk2hIAdt_wtaRxqV9xu7nWATNF5BAEAnH7RDr3RIb0koonGNhCGKepEp5CJE0I5othRO0PtK-TlhVc_gY12kJNM6Bp7dx5HMy3tLnWWSn1vuPKB_g2xwfAL6uMwhUmnVuf8898yvg1l7GNPJjRI0EER5LSQ_Y0Yw=w722-h963-s-no-gm?authuser=0",
    },
];

export const Home = () => {
    return (
        <HomeContainer>
            <IntroductionWrapper>
                <CenterPartWrapper>
                    <RightPartWrapper>
                        <img
                            src="https://lh3.googleusercontent.com/pw/ADCreHd6qkGCWP_eoewO1NDvJDaATrNQhx1jOkiGonbcEyjYctGSv1kzfW35VB1eeLRg_47d_xUb7shOdhgj_8QpU0S750O73bLIGd9DRjVux19ti7SrO4baZtnvcIIqirvYZjGXV5kNYKjGqTd29fTf0YYjNWF0sZzY59w0rLtmKleoof46HfKIKAgAI0mF2-sOaskH4iCfmfCW1qrMYL1tI2Ma6PLb8XjMG5nS1Im6reC3Sj4toG5OhmBeguoGfTCr15uONGJGxU13jJ1ZFhv0Jv3jZUasWHvOcD6DYO_KOiXK49zjHBTsQ2IhRwQ3nEMFLRpXsoC_kJVE6PJFDRuMg3kEe5_KTHGeAGWBIRlCjWJMRzauZVjc2CDv_6JLFlMPr-wfeXDSgbWm5diF2n3xybvjDO7qB4uJJ2Vgc9OjEKZm7TjzDcpMofPRf9Nnwm9uhDhRuQ2qOKRBJo2olh9t_ztiZvMQnNqXxJVkfBgB9e-P2UE9k8R0K7hmiIYcshdJWBHsWTs__1yBxhDcaJVpQ3ogxNuva6xCxM6ujSBZYS1AA83fZTm3QRoh3KHnlEqZ7dg7OhNsgET-kjd9OS-97OcQQ3p7eyjYin2pKNmrof44gGhnLZAKrg_yqleFQODG0KBS6eTpb-TpJ7PfV7EcezYkoDsfXCFM3edtCiLXwoaAbxpVq67QSKTx8hzSDYUfJJMA2vty7WhBlowszH1dcn7ZpWKZGhLoUcKyvm_cNMtRSGGzMYtTPxYpRNXOBpLITEtZbwEu1-Sdya4uJPPCl2vJWHNcRfRvdubKSQsF3b4-i5SEdn3Z833f74RWgCDhFzwfgfHku-CmRGOPS_sWBbJBg1wOPMG5PxfZXL3kiz9vLymwM75_KE94PlMLfWnJFtBR1Q=w722-h963-s-no-gm?authuser=0"
                            alt="boy"
                            width={200}
                            height={200}
                        />
                    </RightPartWrapper>
                    <LeftPartWrapper>
                        <h1>Chào bạn, tôi là Trần Ngọc Lực.</h1>
                        <p>
                            <i>
                                {`“Ai cũng có quyền sống, quyền ước mơ, muốn cho mình hạnh phúc, và tôi cũng vậy. Tôi muốn được
                                yêu em.”`}
                            </i>
                            - Luke Tran
                        </p>
                        <p>
                            <i>
                                “Dù em chọn TAN CHẢY, TAN VỠ, hay KHÔNG TAN VÀO
                                TÌNH YÊU, cuộc sống này vẫn trôi đi, và tình yêu
                                vẫn luôn tồn tại”
                            </i>{" "}
                            - Tan - Lê Ngọc
                        </p>
                        <p> * * *</p>
                    </LeftPartWrapper>
                </CenterPartWrapper>
            </IntroductionWrapper>
            <MemoriesWrapper>
                <MemoryGrid>
                    {memoryPhotos.map((photo) => (
                        <ImageWrapper key={photo.id}>
                            <img src={photo.src} alt="kind of mine" />
                        </ImageWrapper>
                    ))}
                </MemoryGrid>
            </MemoriesWrapper>
        </HomeContainer>
    );
};
