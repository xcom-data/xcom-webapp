import { Skeleton } from '../ui/skeleton'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/./components/ui/card'

export default function ProgramSkeleton() {
    return (
        <div className='mb-6'>
            <Skeleton className='my-5 h-5 w-[100px]' />
            <Card className='mx-4 mb-6 h-[89px]'>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle className='text-base/5'>
                                <Skeleton className='w-1/2' />
                            </CardTitle>
                            <CardDescription>
                                <Skeleton className='w-1/4' />
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Skeleton className='my-5 h-5 w-[100px]' />
            <Card className='mx-4 mb-4 h-[89px]'>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle className='text-base/5'>
                                <Skeleton className='w-1/2' />
                            </CardTitle>
                            <CardDescription>
                                <Skeleton className='w-1/4' />
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Skeleton className='my-5 h-5 w-[100px]' />
            <Card className='mx-4 mb-4 h-[89px]'>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle className='text-base/5'>
                                <Skeleton className='w-1/2' />
                            </CardTitle>
                            <CardDescription>
                                <Skeleton className='w-1/4' />
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}
