// https://levelup.gitconnected.com/lets-create-a-react-custom-pagination-no-libraries-edc5d2531911
import React from 'react'
import { Flex, Box } from 'theme-ui'

const DOTS = '...'

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {

  const paginationRange = React.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}


const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  const handlePrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  const baseSx = {
    flexShrink: 0,
    px: 3,
    py: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'hairline'
  }

  function conditionalSx(enabled) {
    if (enabled) {
      return {
        pointerEvents: 'none',
        cursor: 'auto',
        color: 'muted',
        backgroundColor: 'canvas'
      }
    }
    return {
      pointerEvents: 'auto',
      cursor: 'pointer'
    }
  }

  function isCurrent(active) {
    return active ? { backgroundColor: 'elevated', fontWeight: 'heading' } : {}
  }

  return (
    <Flex sx={{ px: 2 }}>
      <Box onClick={handlePrevious} sx={{ ...baseSx, ...conditionalSx(currentPage === 1) }}>Anterior</Box>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Flex key={pageNumber} sx={{ px: 2, alignItems: 'center', fontWeight: 'heading', flexShrink: 0 }}>&#8230;</Flex>
        }
        return (
          <Box key={pageNumber} onClick={() => onPageChange(pageNumber)} sx={{ ...baseSx, ...conditionalSx(currentPage === pageNumber), ...isCurrent(currentPage === pageNumber) }}>{pageNumber}</Box>
        )
      })}

      <Box onClick={handleNext} sx={{ ...baseSx, ...conditionalSx(currentPage === lastPage) }}>Próximo</Box>
    </Flex>
  )
}

export default Pagination
