// import { login } from './actions'

// export default function LoginPage() {
//     return (
//         <div className='border-slate-700 p-8'>
//             <h1 className='bold'> Logg inn </h1>
//             <form className='flex flex-col rounded-xl border p-4'>
//                 <label htmlFor='email'>Email:</label>
//                 <input id='email' name='email' type='email' required />
//                 <label htmlFor='password'>Passord:</label>
//                 <input id='password' name='password' type='password' required />
//                 <button formAction={login}>Logg in</button>
//                 {/* <button formAction={signup}>Sign up</button> */}
//             </form>
//         </div>
//     )
// }

'use client'

import { login } from './actions'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const loginFormSchema = z.object({
    email: z.string().min(2),
    password: z.string().min(2)
})

export default function LoginPage() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function onSubmit(formdata: z.infer<typeof loginFormSchema>) {
        try {
            const formData = new FormData()
            formData.append('email', formdata.email)
            formData.append('password', formdata.password)
            login(formData)
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto max-w-3xl space-y-8 py-10'
            >
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brukernavn</FormLabel>
                            <FormControl>
                                <Input placeholder='' type='text' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Passord</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=''
                                    type='password'
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Logg inn</Button>
            </form>
        </Form>
    )
}
