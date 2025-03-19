import clsx from 'clsx'

export default function DateTimeDisplay({
    value,
    type,
    isDanger
}: {
    value: number
    type: string
    isDanger: boolean
}) {
    return (
        <div
            className={clsx(
                'p-4 text-center',
                isDanger ? 'font-bold text-red-600' : ''
            )}
        >
            <p className={clsx('', isDanger ? '' : '')}> {value}</p>
            <span className={clsx('', isDanger ? '' : '')}> {type} </span>
        </div>
    )
}
