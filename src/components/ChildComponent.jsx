export default function ChildComponent({ name, value }) {
    return (
        <div>
            <p>Hello, {name}!</p>
            <p>Value is {value}!</p>
        </div>
    );
}
