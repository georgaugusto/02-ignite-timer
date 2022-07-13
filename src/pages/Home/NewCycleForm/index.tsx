import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../contexts/Cycles'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const isInputsDisabled = !!activeCycle

  return (
    <FormContainer>
      <label htmlFor="taks">Vou trabalhar em</label>
      <TaskInput
        id="taks"
        type="text"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={isInputsDisabled}
        isErrored={!!errors.task}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        step={5}
        min={5}
        max={60}
        placeholder="00"
        disabled={isInputsDisabled}
        isErrored={!!errors.minutesAmount}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
