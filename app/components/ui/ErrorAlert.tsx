import * as Alert from '@/components/ui/Alert'
import { cn } from '@/lib/utils'
import { AlertTriangleIcon } from 'lucide-react'

type ErrorAlertProps = Alert.RootProps & { header?: React.ReactNode; children: React.ReactNode }
export default function ErrorAlert({ header, children, className, ...rest }: ErrorAlertProps) {
  return (
    <Alert.Root colorPalette={'danger'} {...rest} className={cn(className)}>
      <Alert.Icon asChild>
        <AlertTriangleIcon />
      </Alert.Icon>
      <Alert.Content>
        {header && <Alert.Title>{header}</Alert.Title>}
        <Alert.Description>{children}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
