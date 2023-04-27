import { useRef } from 'react'
import { useActivityStore } from '@store/store'
import { TYPES } from '@/types/types'

const STAGE_REGEX = /stage-\d+/i

export const useActivity = () => {
  const currentStage = useRef(
    (window.location.href.match(STAGE_REGEX) || [''])[0]
  )
  const dispatch = useActivityStore.getState().dispatch

  const getCurrentStageObject = (stage) => {
    const activities = useActivityStore.getState().activities
    return activities.find((object) => object.stage === stage)
  }

  const setActivity = async (activity) => {
    await dispatch({
      type: TYPES.SAVE_ACTIVITY,
      payload: {
        stage: currentStage.current,
        activity
      }
    })

    setCompleteStage()
  }

  const setCompleteStage = () => {
    const { activities, totalActivities } = getCurrentStageObject(
      currentStage.current
    )

    if (activities.length !== totalActivities) return

    dispatch({
      type: TYPES.COMPLETE_STAGE,
      payload: { stage: currentStage.current }
    })
  }

  const getStagesComplete = () => {
    const activities = useActivityStore.getState().activities

    return activities.reduce((object, { stage, completed }) => {
      const stageWithoutDash = stage.replace('-', '')
      return { ...object, [stageWithoutDash]: { completed } }
    }, {})
  }

  const getActivity = (id) => {
    const { activities } = getCurrentStageObject(currentStage.current)
    const activity = activities.find(item => item.activity === id) ?? {}

    return { ...activity }
  }

  return {
    setActivity,
    getActivity,
    getStagesComplete
  }
}
