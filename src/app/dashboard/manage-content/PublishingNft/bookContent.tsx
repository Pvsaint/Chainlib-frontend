"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

type BookData = {
    bookTitle: string;
    subtitle: string;
    language: string;
    isbn?: string;
};

type BookContentProps = {
    bookData: BookData;
    updateBookData: (data: Partial<BookData>) => void;
    nextStep: () => void;
};

const FileIcon = () => (
    <svg className="w-6 h-6 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
    </svg>
);

function BookContent({ bookData, updateBookData, nextStep }: BookContentProps) {
    const [manuscriptFile, setManuscriptFile] = useState<File | null>(null);
    const [bonusContentFile, setBonusContentFile] = useState<File | null>(null);

    const handleManuscriptUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setManuscriptFile(file);
        }
    };

    const handleBonusContentUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setBonusContentFile(file);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-medium mb-6">Exclusive NFT Book</h1>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Book Content</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="border-2 border-dashed border-blue-200 rounded-md p-4 flex flex-col items-center justify-center h-64 bg-blue-50">
                            <Image
                                src="/imageupload.svg"
                                alt="image upload"
                                className=" w-72 h-60"
                            />
                            <p className="text-sm text-gray-500 text-center">
                                Drag and drop or Click to<br />choose file from device
                            </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Supported format: JPEG & PNG</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
                            <input
                                type="text"
                                placeholder="Your Book Title"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={bookData.bookTitle}
                                onChange={(e) => updateBookData({ bookTitle: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sub-title</label>
                            <input
                                type="text"
                                placeholder="Sub-title"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={bookData.subtitle}
                                onChange={(e) => updateBookData({ subtitle: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={bookData.language}
                                onChange={(e) => updateBookData({ language: e.target.value })}
                            >
                                <option value="">Select Language</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="zh">Chinese</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Book ISBN (Optional)</label>
                            <input
                                type="text"
                                placeholder="978-1-234-56789-0"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={bookData.isbn}
                                onChange={(e) => updateBookData({ isbn: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manuscript</label>
                    <div
                        className="border-2 border-dashed border-blue-200 rounded-md p-4 flex flex-col items-center justify-center h-32 bg-blue-50 cursor-pointer"
                        onClick={() => document.getElementById('manuscript-upload')?.click()}
                    >
                        <FileIcon />
                        <p className="text-sm text-gray-500 text-center">
                            Drag and drop or Click to<br />choose file from device
                        </p>
                        <input
                            id="manuscript-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleManuscriptUpload}
                        />
                    </div>
                    {manuscriptFile && (
                        <p className="text-xs text-gray-600 mt-2">{manuscriptFile.name} - {Math.round(manuscriptFile.size / 1024)} KB</p>
                    )}
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">Add Bonus Content</label>
                        <button
                            type="button"
                            className="flex items-center text-blue-500 text-sm font-medium"
                            onClick={() => document.getElementById('bonus-content-upload')?.click()}
                        >
                            <span className="mr-1">+</span> Add
                        </button>
                        <input
                            id="bonus-content-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            onChange={handleBonusContentUpload}
                        />
                    </div>

                    <div
                        className="border-2 border-dashed border-blue-200 rounded-md p-4 flex flex-col items-center justify-center h-32 bg-blue-50 mt-2 cursor-pointer"
                        onClick={() => document.getElementById('bonus-content-upload')?.click()}
                    >
                        <Image
                            src="/imageupload.svg"
                            alt="image upload"
                            className=" w-72 h-60"
                        />
                        <p className="text-sm text-gray-500 text-center">
                            Drag and drop or Click to<br />choose file from device
                        </p>
                    </div>
                    {bonusContentFile && (
                        <p className="text-xs text-gray-600 mt-2">{bonusContentFile.name} - {Math.round(bonusContentFile.size / 1024)} KB</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">e.g. bonus artwork, author message</p>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200"
                        disabled
                    >
                        Back
                    </button>
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
                        onClick={nextStep}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookContent;


