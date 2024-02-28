function Fieldset({ text, firstInput, secInput, thirdInput }) {
    return (
        <form>
            <fieldset>
                <legend>{text}</legend>
                <input type="radio" />
                {firstInput}
                <input type="radio" />
                {secInput}
                <input type="radio" />
                {thirdInput.name}
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default Fieldset;
