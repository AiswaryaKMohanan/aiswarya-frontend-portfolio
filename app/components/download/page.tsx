export default function Download() {
    return (

        <section id="download"  className="py-28 px-6 max-w-10xl mx-auto">

            <div className="flex gap-4">
                <a
                    href="Aiswarya_Kotharambath_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View CV
                </a>

                <a
                    href="/Aiswarya_Kotharambath_CV.pdf"
                    download
                >
                    Download CV
                </a>
            </div>
        </section>);
}
