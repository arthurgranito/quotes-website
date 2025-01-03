import React from 'react'
import { useParams } from 'react-router-dom'
import { Blockquote } from '../ui/blockquote';
import { Button } from '@chakra-ui/react';
import html2canvas from 'html2canvas';

const Quote = () => {
    const { quote } = useParams();
    const { author } = useParams();

    const downloadQuote = (() => {
        const quoteImg = document.getElementById('quote');

        html2canvas(quoteImg, {
            backgroundColor: null,
            useCORS: true,
            scrollY: 0,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'quote.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    })

    return (
        <div className='main'>
            <Blockquote showDash cite={author} className='blockquote' id='quote'>
                <div className="quote-content">
                    {quote}
                </div>
            </Blockquote>

            <Button className='download-btn' variant='outline' onClick={() => {
                downloadQuote();
            }}>Download Quote</Button>
        </div>
    )
}

export default Quote