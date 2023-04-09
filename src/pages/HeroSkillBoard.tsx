import React, { useEffect, useState } from "react"
import SkillAdapter from "../components/SkillAdapter"
import { getHeroSkill, updateHeroSkill } from "../api/apis"
import { HeroSkillType } from "../types/HeroSkillType"
import { initSkillData } from "../const/initSkillData"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import CommonButton from "../components/CommonButton"

const BoardLayout = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 16px;
  flex-wrap: wrap;
  width: 45vw;
  box-sizing: border-box;
`
const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  flex: 1;
`
const SaveAndRestSkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  min-width: 140px;
  position: relative;
`

const RestSkill = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`

const MessageBox = styled.div<{ show: boolean }>`
  position: absolute;
  right: 8px;
  bottom: 6px;
  color: green;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity ease-in-out 0.3s;
`

const HeroSkillBoard = (): JSX.Element => {
  const { heroId } = useParams()
  const [skill, setSkill] = useState<HeroSkillType>(initSkillData)
  const [successMsg, setSuccessMsg] = useState<boolean>(false)
  const [restSkill, setRestSkill] = useState<number>(0)
  const getData = async () => {
    const res = await getHeroSkill(Number(heroId))
    setSkill(res.data)
  }

  const saveSkill = async () => {
    const res = await updateHeroSkill(Number(heroId), skill)
    if (res.data === "OK") setSuccessMsg(true)
  }

  const addSkill = (skillKey: keyof HeroSkillType) => {
    setSkill({
      ...skill,
      [skillKey]: skill[skillKey] + 1,
    })
    setRestSkill(restSkill - 1)
  }

  const minusSkill = (skillKey: keyof HeroSkillType) => {
    setSkill({
      ...skill,
      [skillKey]: skill[skillKey] - 1,
    })
    setRestSkill(restSkill + 1)
  }

  useEffect(() => {
    getData()
  }, [heroId])

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [successMsg])

  return (
    <BoardLayout>
      <SkillsBox>
        <SkillAdapter
          restSkill={restSkill}
          label="str"
          value={skill.str}
          add={addSkill}
          minus={minusSkill}
        />
        <SkillAdapter
          restSkill={restSkill}
          label="int"
          value={skill.int}
          add={addSkill}
          minus={minusSkill}
        />
        <SkillAdapter
          restSkill={restSkill}
          label="agi"
          value={skill.agi}
          add={addSkill}
          minus={minusSkill}
        />
        <SkillAdapter
          restSkill={restSkill}
          label="luk"
          value={skill.luk}
          add={addSkill}
          minus={minusSkill}
        />
      </SkillsBox>
      <SaveAndRestSkillBox>
        <RestSkill>剩餘點數：{restSkill}</RestSkill>
        <CommonButton
          text="Save"
          width={80}
          action={saveSkill}
          disabled={restSkill !== 0}
        />
        <MessageBox show={successMsg}>成功!</MessageBox>
      </SaveAndRestSkillBox>
    </BoardLayout>
  )
}

export default HeroSkillBoard
