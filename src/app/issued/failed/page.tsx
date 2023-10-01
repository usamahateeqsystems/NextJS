function simpleError() {
    const data = 1/0
    return data
}

export default async function Failed() {
    const data = await simpleError()
    return(
        <div>
            {data}
        </div>
    )
}