"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function RedButton({ buttonName }) {

    /// web page 
    return (
        <button className="bg-red-300 w-24 h-8">
            {buttonName}
        </button>
    )
}
