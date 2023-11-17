const likeMutate = useMutation({
  mutationFn: likeAnswer,
  retry: 2,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['doubts-data-by-id'] })
    setTimeout(() => {
      setLoadingButton(null)
    }, 1800)
  },
})
