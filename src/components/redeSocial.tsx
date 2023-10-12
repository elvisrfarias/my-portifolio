import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { Tooltip } from 'antd';
import React from 'react'
import Link from 'next/link';

const RedeSocial = () => {
    return (
        <div className='box-icones'>
            <ul>
                <Tooltip placement="top" title={'📱 (49) 9 9169-6698'}>
                    <Link href='https://api.whatsapp.com/send?phone=5549991696698' target='_black'>
                        <li><FaWhatsapp /></li>
                    </Link>
                </Tooltip>

                <Link href='https://www.linkedin.com/in/elvisfarias/' target='_black'>
                    <li><FaLinkedinIn /></li>
                </Link>
            </ul>
        </div>
    )
}

export default RedeSocial;
