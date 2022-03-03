const Upload = () => {
    return (<>
        <div class="flex items-center justify-center w-11/12 md:w-1/2 mx-auto shadow-lg">
            <label class="flex flex-col rounded-lg border-2 border-dashed w-full h-60 p-10 group text-center h-full cursor-pointer">
                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center">
                    <div class="flex flex-auto max-h-48 mx-auto">
                        <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                    </div>
                    <h1 class="pointer-none text-blue-500 text-center pt-10">Upload infected crop image.</h1>
                    
                </div>
                <input type="file" class="hidden" />
            </label>
        </div>
    </>)
}

export default Upload