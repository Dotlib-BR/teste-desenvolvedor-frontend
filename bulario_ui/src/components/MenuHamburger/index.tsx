import * as Dialog from '@radix-ui/react-dialog';

export default function Menuhamburger() {

    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title />
                        <Dialog.Description />
                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}