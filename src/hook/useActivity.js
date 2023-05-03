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

  const setPlan = (plan) => {
    dispatch({
      type: TYPES.SAVE_PLAN,
      payload: {
        stage: currentStage.current,
        plan
      }
    })
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

    setNavigate(currentStage.current)
  }

  const setNavigate = (stage) => {
    dispatch({
      type: TYPES.ACTIVE_NAVIGATE,
      payload: stage
    })
  }

  const getStagesComplete = () => {
    const activities = useActivityStore.getState().activities

    return activities.reduce((object, { stage, completed }) => {
      const stageWithoutDash = stage.replace('-', '')
      return { ...object, [stageWithoutDash]: { completed } }
    }, {})
  }

  const getPlan = () => {
    const { plan = {} } = getCurrentStageObject(currentStage.current)
    return plan
  }

  const getActivity = (id) => {
    const { activities } = getCurrentStageObject(currentStage.current)
    const activity = activities.find((item) => item.activity === id) ?? {}

    return { ...activity }
  }

  const getAllActivityPoints = () => {
    const activities = useActivityStore.getState().activities

    const mergedActivities = activities.reduce((merged, { activities }) => {
      const newActivities = activities.reduce((acc, { activity, points }) => {
        const newActivity = activity.replace('_', '')
        return { ...acc, [newActivity]: points }
      }, {})

      return { ...merged, ...newActivities }
    }, {})

    return mergedActivities
  }

  return {
    setPlan,
    getPlan,
    setActivity,
    getActivity,
    getStagesComplete,
    getAllActivityPoints,
    getCurrentStageObject
  }
}
