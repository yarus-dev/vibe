import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import GoogleIcon  from '@/assets/icons/google.svg';
import AppleIcon  from '@/assets/icons/apple.svg';
import {clsx} from 'clsx';

const AccountsIcons = {
  google: GoogleIcon,
  apple: AppleIcon,
}

const userAccaunts = {
  google: true,
  apple: false
}

function Section({ title, description, children, className }) {
  return (
    <section className={clsx('mt-6', 'mb-6',className)}>
      {(title || description) && (
        <header className='mt-6 mb-4'>
          {title && (<h2 className="text-xl font-extrabold mt-4 mb-2">{title}</h2>)}
          {description && (<p className='my-2'>{description}</p>)}
        </header>
      )}
      {children}
    </section>
  )
}

function Account ({ account, isLinked }) {
  const Title = account.charAt(0).toUpperCase() + account.slice(1);


  return (
    <>
      <dl className='flex gap-2  items-center'>
        <img
          src={AccountsIcons[account]}
          alt={Title + ' icon'}
          className='size-6'
        />
        {Title + ' is ' + (isLinked ? 'linked' : 'not linked')}
      </dl>
      <dt>
        <a
          title={(isLinked ? 'Unlink' : 'Link') + ' your ' + Title + ' account'}
          href="#"
          className={clsx(
            'text-blue-600',
            isLinked && 'hover:text-red-600',
            isLinked && 'focus:text-red-600',
            'hover:underline',
            !isLinked ? 'active:ring-blue-600' : 'active:ring-red-600',
            'focus:ring-2',
            !isLinked ? 'focus:ring-blue-600' : 'focus:ring-red-600',
            'focus:ring-offset-2',
            'outline-none',
            'focus:ring-offset-white'
          )}
        >{(!isLinked ? 'Link your account' : 'Unlink')}</a>
      </dt>
    </>
  )
}



function Accounts({ accounts = {}, className }) {
  const accounts_types = Object.keys(accounts);

  if (!accounts_types.length) return null;

  return (
    <dl className={clsx('grid grid-cols-2 gap-2', className)}>
      {accounts_types.map((account) => (<Account key={account} account={account} isLinked={accounts[account]} />))}
    </dl>
  )
}
export function SettingsPage() {
  return (
    <div className="container mx-auto px-4 max-w-prose relativerelativerelative">
      <header className='mt-8 mb-6'>
        <h1 className='text-4xl font-extrabold'>Account settings</h1>
      </header>

      <Section
        title='Display Name'
        description='Please enter your full name, or a display name you are comfortable with.'
      >
        <Input
          name="dsiplay-name"
          value="Yaroslav Usenko"
        />
      </Section>

      <Section
        title='Email'
        description='Please enter the email address you want to use to log in with Vercel.'
      >
        <Input
          name="email"
          type="email"
          value="yar.usenko.inc@gmail.com"
        />
      </Section>

      <Section
        title='Username'
        description='This is your URL namespace within Vibe.'
      >
        <Input
          name="username"
          value="yar-usenko"
        />
      </Section>


      <Section
        title='Linked accounts'
        description='You can use these to quickly log into your Vibe account.'
      >
        <Accounts accounts={userAccaunts} />
      </Section>

      <Section
        title='Delete Account'
        description='Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.'
      >
        <Button
        >
          Delete Personal Account
        </Button>
      </Section>

      <footer>
        <Button
          color="blue"

        >
          Save
        </Button>
      </footer>
    </div>
  );
}
